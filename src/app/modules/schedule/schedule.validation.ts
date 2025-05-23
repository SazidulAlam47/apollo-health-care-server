import { z } from 'zod';
import pad from '../../utils/pad';

const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/;

const now = new Date();
const today = new Date(
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T00:00:00.000Z`,
);

const createSchedule = z
    .object({
        startDate: z
            .string()
            .date()
            .refine((value) => today <= new Date(value), {
                message: "Start date can't be in the past.",
            }),
        endDate: z
            .string()
            .date()
            .refine((value) => today <= new Date(value), {
                message: "End date can't be in the past.",
            }),
        startTime: z.string().regex(timeRegex, {
            message: 'Invalid time format',
        }),
        endTime: z.string().regex(timeRegex, {
            message: 'Invalid time format',
        }),
    })
    .refine(
        (values) => new Date(values.startDate) <= new Date(values.endDate),
        {
            message: 'startDate must be before endDate',
            path: ['startDate', 'endDate'],
        },
    )
    .refine(
        (values) => {
            const startTime = new Date(`1970-01-01T${values.startTime}:00`);
            const endTime = new Date(`1970-01-01T${values.endTime}:00`);

            return startTime < endTime;
        },
        {
            message: 'startTime must be before endTime',
            path: ['startTime', 'endTime'],
        },
    );
export const ScheduleValidations = {
    createSchedule,
};
