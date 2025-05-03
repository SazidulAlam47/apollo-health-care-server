import { z } from 'zod';
import { ScheduleValidations } from './schedule.validation';
import { Schedule } from '../../../../generated/prisma';

export type TCreateSchedule = z.infer<
    typeof ScheduleValidations.createSchedule
>;

export type TScheduleFilterKeys = keyof Schedule;
