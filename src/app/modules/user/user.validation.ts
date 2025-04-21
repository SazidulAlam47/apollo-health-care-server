import { z } from 'zod';

const createAdminValidationSchema = z.object({
    password: z.string(),
    admin: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNumber: z.string(),
        profilePhoto: z.string().optional(),
    }),
});

export const UserValidations = {
    createAdminValidationSchema,
};
