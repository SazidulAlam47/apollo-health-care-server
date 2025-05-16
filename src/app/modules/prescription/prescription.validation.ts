import { z } from 'zod';

const createPrescription = z.object({
    appointmentId: z.string(),
    instructions: z.string(),
    followUpDate: z.string().datetime().optional(),
});

export const PrescriptionValidations = {
    createPrescription,
};
