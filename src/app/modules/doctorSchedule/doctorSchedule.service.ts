import status from 'http-status';
import ApiError from '../../errors/ApiError';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import prisma from '../../utils/prisma';
import { TCreateDoctorSchedulePayload } from './doctorSchedule.interface';

const createDoctorSchedule = async (
    payload: TCreateDoctorSchedulePayload,
    decodedUser: TDecodedUser,
) => {
    const doctor = await prisma.doctor.findUnique({
        where: { email: decodedUser.email },
        select: { id: true },
    });
    if (!doctor) {
        throw new ApiError(status.NOT_FOUND, 'Doctor not found');
    }

    const doctorSchedules = payload.scheduleIds.map((scheduleId) => ({
        doctorId: doctor.id,
        scheduleId,
    }));

    const result = await prisma.doctorSchedules.createMany({
        data: doctorSchedules,
    });

    return result;
};

export const DoctorScheduleServices = {
    createDoctorSchedule,
};
