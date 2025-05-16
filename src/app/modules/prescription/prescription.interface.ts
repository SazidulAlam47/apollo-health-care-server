import { z } from 'zod';
import { PrescriptionValidations } from './prescription.validation';

export type TCreatePrescriptionPayload = z.infer<
    typeof PrescriptionValidations.createPrescription
>;
