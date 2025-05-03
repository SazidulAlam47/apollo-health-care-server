import { z } from 'zod';

const createDoctorSchedule = z.object({
    scheduleIds: z.string().array(),
});

export const DoctorScheduleValidations = {
    createDoctorSchedule,
};
