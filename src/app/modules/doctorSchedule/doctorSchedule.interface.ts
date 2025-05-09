import { TScheduleFilterKeys } from './../schedule/schedule.interface';
import { z } from 'zod';
import { DoctorScheduleValidations } from './doctorSchedule.validation';
import { DoctorSchedules } from '../../../../generated/prisma';

export type TCreateDoctorSchedulePayload = z.infer<
    typeof DoctorScheduleValidations.createDoctorSchedule
>;

export type TDoctorScheduleFilterKeys =
    | keyof DoctorSchedules
    | TScheduleFilterKeys;
