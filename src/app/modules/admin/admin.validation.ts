import { z } from 'zod';

const adminUpdateValidationSchema = z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
});

export const AdminValidations = {
    adminUpdateValidationSchema,
};
