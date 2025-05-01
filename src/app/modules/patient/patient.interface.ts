import { z } from 'zod';
import { Patient } from '../../../../generated/prisma';
import { PatientValidations } from './patient.validation';

export type TPatientFilterKeys = keyof Patient;

export type TPatientUpdate = z.infer<typeof PatientValidations.patientUpdate>;
