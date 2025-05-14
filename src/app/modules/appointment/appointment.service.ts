import status from 'http-status';
import ApiError from '../../errors/ApiError';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import prisma from '../../utils/prisma';
import { TCreateAppointmentPayload } from './appointment.interface';
import { v4 as uuidv4 } from 'uuid';

const createAppointment = async (
    payload: TCreateAppointmentPayload,
    decodedUser: TDecodedUser,
) => {
    const patient = await prisma.patient.findUniqueOrThrow({
        where: { email: decodedUser.email },
        select: { id: true },
    });

    const doctor = await prisma.doctor.findUnique({
        where: { id: payload.doctorId },
        select: { id: true },
    });
    if (!doctor) {
        throw new ApiError(status.NOT_FOUND, 'Doctor not found');
    }

    const schedule = await prisma.schedule.findUnique({
        where: { id: payload.scheduleId },
        select: { id: true },
    });
    if (!schedule) {
        throw new ApiError(status.NOT_FOUND, 'Schedule not found');
    }

    const isAppointmentExists = await prisma.appointment.findFirst({
        where: {
            patientId: patient.id,
            doctorId: doctor.id,
            scheduleId: schedule.id,
        },
    });
    if (isAppointmentExists) {
        throw new ApiError(status.CONFLICT, 'Appointment is already booked');
    }

    const doctorSchedule = await prisma.doctorSchedules.findUnique({
        where: {
            doctorId_scheduleId: {
                doctorId: doctor.id,
                scheduleId: schedule.id,
            },
        },
    });
    if (!doctorSchedule) {
        throw new ApiError(status.NOT_FOUND, 'Doctor-Schedule not found');
    }

    if (doctorSchedule.isBooked) {
        throw new ApiError(
            status.CONFLICT,
            'Doctor is not available on this Schedule',
        );
    }

    const videoCallingId = uuidv4();

    return await prisma.$transaction(async (tx) => {
        const result = await tx.appointment.create({
            data: {
                patientId: patient.id,
                doctorId: doctor.id,
                scheduleId: schedule.id,
                videoCallingId,
            },
            include: {
                doctor: true,
                schedule: true,
                patient: true,
            },
        });

        await tx.doctorSchedules.update({
            where: {
                doctorId_scheduleId: {
                    doctorId: payload.doctorId,
                    scheduleId: payload.scheduleId,
                },
            },
            data: {
                isBooked: true,
                appointmentId: result.id,
            },
        });

        return result;
    });
};

export const AppointmentServices = {
    createAppointment,
};
