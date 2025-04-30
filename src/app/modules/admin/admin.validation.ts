import { z } from 'zod';

const adminUpdate = z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
});

export const AdminValidations = {
    adminUpdate,
};
