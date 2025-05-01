import { z } from 'zod';
import { ScheduleValidations } from './schedule.validation';

export type TCreateSchedule = z.infer<
    typeof ScheduleValidations.createSchedule
>;
