import { z } from 'zod';
import { DoctorScheduleValidations } from './doctorSchedule.validation';

export type TCreateDoctorSchedulePayload = z.infer<
    typeof DoctorScheduleValidations.createDoctorSchedule
>;
