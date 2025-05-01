import { z } from 'zod';

const createSchedule = z
    .object({
        startDate: z.string().datetime(),
        endDate: z.string().datetime(),
    })
    .refine((values) => new Date(values.startDate) < new Date(values.endDate), {
        message: 'startDate must be before endDate',
        path: ['startDate', 'endDate'],
    });

export const ScheduleValidations = {
    createSchedule,
};
