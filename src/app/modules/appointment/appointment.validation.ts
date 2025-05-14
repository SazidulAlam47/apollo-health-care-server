import { z } from 'zod';

const createAppointment = z.object({
    doctorId: z.string(),
    scheduleId: z.string(),
});

export const AppointmentValidations = {
    createAppointment,
};
