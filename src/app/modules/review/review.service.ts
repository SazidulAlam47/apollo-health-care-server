import status from 'http-status';
import ApiError from '../../errors/ApiError';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import prisma from '../../utils/prisma';
import { TCreateReviewPayload } from './review.interface';
import { TQueryParams } from '../../interfaces';
import calculateOptions from '../../utils/calculateOptions';
import { Prisma } from '../../../../generated/prisma';
import { reviewSearchableFields } from './review.constant';

const createReview = async (
    payload: TCreateReviewPayload,
    decodedUser: TDecodedUser,
) => {
    const isReviewExists = await prisma.review.findUnique({
        where: { appointmentId: payload.appointmentId },
        select: { id: true },
    });
    if (isReviewExists) {
        throw new ApiError(
            status.CONFLICT,
            'Already reviewed for this appointment',
        );
    }

    const appointment = await prisma.appointment.findUnique({
        where: { id: payload.appointmentId },
        select: {
            id: true,
            doctorId: true,
            patientId: true,
            status: true,
            patient: {
                select: { email: true },
            },
        },
    });
    if (!appointment) {
        throw new ApiError(status.NOT_FOUND, 'Appointment not found');
    }

    if (appointment.patient.email !== decodedUser.email) {
        throw new ApiError(status.FORBIDDEN, 'Forbidden access');
    }

    if (appointment.status !== 'COMPLETED') {
        throw new ApiError(
            status.BAD_REQUEST,
            'Appointment is not completed yet',
        );
    }

    return await prisma.$transaction(async (tx) => {
        const result = await tx.review.create({
            data: {
                patientId: appointment.patientId,
                doctorId: appointment.doctorId,
                appointmentId: appointment.id,
                rating: payload.rating,
                comment: payload.comment,
            },
        });

        const avgRating = await tx.review.aggregate({
            _avg: {
                rating: true,
            },
        });

        await tx.doctor.update({
            where: { id: appointment.doctorId },
            data: {
                averageRating: avgRating._avg.rating || 0.0,
            },
        });

        return result;
    });
};

const getAllReviews = async (
    filters: { doctorEmail?: string; patientEmail?: string },
    query: TQueryParams,
) => {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } =
        calculateOptions(query);

    const andConditions: Prisma.ReviewWhereInput[] = [];

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
            OR: reviewSearchableFields.map(({ relation, field }) => ({
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

    const whereCondition: Prisma.ReviewWhereInput = { AND: andConditions };

    const result = await prisma.review.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            patient: true,
            doctor: true,
            appointment: true,
        },
    });

    const totalData = await prisma.review.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

export const ReviewServices = {
    createReview,
    getAllReviews,
};
