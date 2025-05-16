import status from 'http-status';
import ApiError from '../../errors/ApiError';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import prisma from '../../utils/prisma';
import { TCreatePrescriptionPayload } from './prescription.interface';

const createPrescription = async (
    payload: TCreatePrescriptionPayload,
    decodedUser: TDecodedUser,
) => {
    const appointment = await prisma.appointment.findUnique({
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
    if (!appointment) {
        throw new ApiError(status.NOT_FOUND, 'Appointment not found');
    }
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

export const PrescriptionServices = {
    createPrescription,
};
