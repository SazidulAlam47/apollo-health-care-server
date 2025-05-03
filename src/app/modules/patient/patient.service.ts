import status from 'http-status';
import { Patient, Prisma } from '../../../../generated/prisma';
import { TQueryParams } from '../../interfaces';
import ApiError from '../../errors/ApiError';
import calculateOptions from '../../utils/calculateOptions';
import prisma from '../../utils/prisma';
import { patientSearchableFields } from './patient.constant';
import buildSearchFilterConditions from '../../utils/buildConditions';
import { TPatientUpdate } from './patient.interface';

const getAllPatientsFromDB = async (
    filterData: Partial<Patient>,
    query: TQueryParams,
) => {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } =
        calculateOptions(query);
    const andConditions: Prisma.PatientWhereInput[] = [];

    const searchFilterConditions = buildSearchFilterConditions(
        searchTerm,
        patientSearchableFields,
        filterData,
    );
    if (searchFilterConditions) {
        andConditions.push(...searchFilterConditions);
    }

    andConditions.push({
        isDeleted: false,
    });

    // check the condition
    // console.dir(andConditions, { depth: Infinity });

    const whereCondition: Prisma.PatientWhereInput = { AND: andConditions };

    const result = await prisma.patient.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            patientHealthData: true,
            medicalReport: true,
        },
    });

    const totalData = await prisma.patient.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

const getPatientByIdFromDB = async (id: string) => {
    const result = await prisma.patient.findUnique({
        where: { id, isDeleted: false },
        include: {
            patientHealthData: true,
            medicalReport: true,
        },
    });
    return result;
};

const deletePatientByIdFromDB = async (id: string) => {
    const patient = await prisma.patient.findUnique({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    if (!patient) {
        throw new ApiError(status.NOT_FOUND, 'Patient not found');
    }
    const result = await prisma.$transaction(async (tx) => {
        const patientDeletedData = await tx.patient.update({
            where: { id },
            data: { isDeleted: true },
        });

        await tx.user.update({
            where: { email: patientDeletedData.email },
            data: { status: 'DELETED' },
        });

        return patientDeletedData;
    });
    return result;
};

const updatePatientByIdIntoDB = async (id: string, payload: TPatientUpdate) => {
    const { patientHealthData, medicalReport, ...patientData } = payload;
    const patient = await prisma.patient.findUnique({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    if (!patient) {
        throw new ApiError(status.NOT_FOUND, 'Patient not found');
    }

    return await prisma.$transaction(async (tx) => {
        // create or update health data
        if (patientHealthData) {
            await tx.patientHealthData.upsert({
                where: { patientId: patient.id },
                update: patientHealthData,
                create: { ...patientHealthData, patientId: patient.id },
            });
        }
        //add medical report
        if (medicalReport) {
            await tx.medicalReport.create({
                data: { ...medicalReport, patientId: patient.id },
            });
        }

        // update patient table
        return await tx.patient.update({
            where: { id },
            data: patientData,
            include: {
                patientHealthData: true,
                medicalReport: true,
            },
        });
    });
};

export const PatientServices = {
    getAllPatientsFromDB,
    getPatientByIdFromDB,
    updatePatientByIdIntoDB,
    deletePatientByIdFromDB,
};
