import status from 'http-status';
import ApiError from '../../errors/ApiError';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import prisma from '../../utils/prisma';
import { TCreatePrescriptionPayload } from './prescription.interface';
import { TQueryParams } from '../../interfaces';
import calculateOptions from '../../utils/calculateOptions';
import { Prisma } from '../../../../generated/prisma';
import {
    prescriptionPatientSearchableFields,
    prescriptionSearchableFields,
} from './prescription.constant';

const createPrescription = async (
    payload: TCreatePrescriptionPayload,
    decodedUser: TDecodedUser,
) => {
    const appointment = await prisma.appointment.findUniqueOrThrow({
        where: { id: payload.appointmentId },
        select: {
            id: true,
            patientId: true,
            doctorId: true,
            status: true,
            doctor: {
                select: {
                    email: true,
                },
            },
        },
    });

    if (appointment.status !== 'COMPLETED') {
        throw new ApiError(status.BAD_REQUEST, 'Appointment is not COMPLETED');
    }
    if (appointment.doctor.email !== decodedUser.email) {
        throw new ApiError(status.FORBIDDEN, 'Forbidden Access');
    }

    const isPrescriptionExists = await prisma.prescription.findUnique({
        where: { appointmentId: appointment.id },
        select: { id: true },
    });
    if (isPrescriptionExists) {
        throw new ApiError(
            status.CONFLICT,
            'Prescription already exists for this Appointment',
        );
    }

    const result = await prisma.prescription.create({
        data: {
            appointmentId: appointment.id,
            doctorId: appointment.doctorId,
            patientId: appointment.patientId,
            instructions: payload.instructions,
            followUpDate: payload.followUpDate,
        },
        include: {
            patient: true,
        },
    });

    return result;
};

const getPatientPrescriptions = async (
    filters: { doctorEmail?: string },
    query: TQueryParams,
    decodedUser: TDecodedUser,
) => {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } =
        calculateOptions(query);

    const andConditions: Prisma.PrescriptionWhereInput[] = [];

    // only show patients own prescriptions
    andConditions.push({
        patient: {
            email: decodedUser.email,
        },
    });

    // filter doctor email
    if (filters?.doctorEmail) {
        andConditions.push({
            doctor: {
                email: filters.doctorEmail,
            },
        });
    }

    // search
    if (searchTerm) {
        andConditions.push({
            OR: prescriptionPatientSearchableFields.map(
                ({ relation, field }) => ({
                    [relation]: {
                        [field]: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        },
                    },
                }),
            ),
        });
    }

    // console.dir(andConditions, { depth: Infinity });

    const whereCondition: Prisma.PrescriptionWhereInput = {
        AND: andConditions,
    };

    const result = await prisma.prescription.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            doctor: true,
            patient: true,
            appointment: true,
        },
    });

    const totalData = await prisma.prescription.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

const getAllPrescriptions = async (
    filters: { doctorEmail?: string; patientEmail?: string },
    query: TQueryParams,
) => {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } =
        calculateOptions(query);

    const andConditions: Prisma.PrescriptionWhereInput[] = [];

    // filter doctor email
    if (filters?.doctorEmail) {
        andConditions.push({
            doctor: {
                email: filters.doctorEmail,
            },
        });
    }

    // filter patient email
    if (filters?.patientEmail) {
        andConditions.push({
            patient: {
                email: filters.patientEmail,
            },
        });
    }

    // search
    if (searchTerm) {
        andConditions.push({
            OR: prescriptionSearchableFields.map(({ relation, field }) => ({
                [relation]: {
                    [field]: {
                        contains: searchTerm,
                        mode: 'insensitive',
                    },
                },
            })),
        });
    }

    // console.dir(andConditions, { depth: Infinity });

    const whereCondition: Prisma.PrescriptionWhereInput = {
        AND: andConditions,
    };

    const result = await prisma.prescription.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            doctor: true,
            patient: true,
            appointment: true,
        },
    });

    const totalData = await prisma.prescription.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

export const PrescriptionServices = {
    createPrescription,
    getPatientPrescriptions,
    getAllPrescriptions,
};
