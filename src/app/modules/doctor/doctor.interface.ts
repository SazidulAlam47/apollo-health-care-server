import { z } from 'zod';
import { Doctor } from '../../../../generated/prisma';
import { DoctorValidations } from './doctor.validation';

export type TDoctorFilterKeys = keyof Doctor;

export type TDoctorUpdate = z.infer<typeof DoctorValidations.doctorUpdate>;
