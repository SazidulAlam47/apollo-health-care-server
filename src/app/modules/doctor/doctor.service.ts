import status from 'http-status';
import { Doctor, Prisma, UserStatus } from '../../../../generated/prisma';
import { TQueryParams } from '../../interfaces';
import ApiError from '../../errors/ApiError';
import calculateOptions from '../../utils/calculateOptions';
import prisma from '../../utils/prisma';
import buildSearchFilterConditions from '../../utils/buildConditions';
import { doctorSearchableFields } from './doctor.constant';

const getAllDoctorsFromDB = async (
    filterData: Partial<Doctor>,
    query: TQueryParams,
) => {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } =
        calculateOptions(query);
    const andConditions: Prisma.DoctorWhereInput[] = [];

    const searchFilterConditions = buildSearchFilterConditions(
        searchTerm,
        doctorSearchableFields,
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

    const whereCondition: Prisma.DoctorWhereInput = { AND: andConditions };

    const result = await prisma.doctor.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });

    const totalData = await prisma.doctor.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

const getDoctorByIdFromDB = async (id: string) => {
    const result = await prisma.doctor.findUnique({
        where: { id, isDeleted: false },
    });
    return result;
};

const deleteDoctorByIdFromDB = async (id: string) => {
    const doctor = await prisma.doctor.findUnique({
        where: { id, isDeleted: false },
    });
    if (!doctor) {
        throw new ApiError(status.NOT_FOUND, 'Doctor not found');
    }
    const result = await prisma.$transaction(async (tx) => {
        const doctorDeletedData = await tx.doctor.update({
            where: { id },
            data: { isDeleted: true },
        });

        await tx.user.update({
            where: { email: doctorDeletedData.email },
            data: { status: UserStatus.DELETED },
        });

        return doctorDeletedData;
    });
    return result;
};

const updateDoctorByIdIntoDB = async (id: string, data: Partial<Doctor>) => {
    const doctor = await prisma.doctor.findUnique({
        where: { id, isDeleted: false },
    });
    if (!doctor) {
        throw new ApiError(status.NOT_FOUND, 'Doctor not found');
    }
    const result = await prisma.doctor.update({
        where: { id },
        data,
    });
    return result;
};

export const DoctorServices = {
    getAllDoctorsFromDB,
    getDoctorByIdFromDB,
    updateDoctorByIdIntoDB,
    deleteDoctorByIdFromDB,
};
