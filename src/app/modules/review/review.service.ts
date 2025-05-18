import status from 'http-status';
import ApiError from '../../errors/ApiError';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import prisma from '../../utils/prisma';
import { TCreateReviewPayload } from './review.interface';

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

    const result = await prisma.review.create({
        data: {
            patientId: appointment.patientId,
            doctorId: appointment.doctorId,
            appointmentId: appointment.id,
            rating: payload.rating,
            comment: payload.comment,
        },
    });

    return result;
};

export const ReviewServices = {
    createReview,
};
