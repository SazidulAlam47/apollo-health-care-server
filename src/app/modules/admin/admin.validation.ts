import { z } from 'zod';

const adminUpdate = z.object({
    name: z.string().optional(),
    contactNumber: z
        .string()
        .regex(/^01\d{9}$/, {
            message: 'Number must be 11 digits and start with 01',
        })
        .optional(),
});

export const AdminValidations = {
    adminUpdate,
};
