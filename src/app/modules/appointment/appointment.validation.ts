import { z } from 'zod';
import { AppointmentStatus } from '../../../../generated/prisma';

const createAppointment = z.object({
    doctorId: z.string(),
    scheduleId: z.string(),
});

const changeAppointmentStatus = z.object({
    status: z.enum([
        AppointmentStatus.IN_PROGRESS,
        AppointmentStatus.COMPLETED,
    ]),
});

export const AppointmentValidations = {
    createAppointment,
    changeAppointmentStatus,
};
