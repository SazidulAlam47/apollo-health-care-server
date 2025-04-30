import { z } from 'zod';
import { Doctor } from '../../../../generated/prisma';
import { DoctorValidations } from './doctor.validation';

export type TDoctorFilterKeys = keyof Doctor | 'specialties';

export type TDoctorUpdate = z.infer<typeof DoctorValidations.doctorUpdate>;
