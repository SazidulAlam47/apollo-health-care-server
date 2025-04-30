import { z } from 'zod';

const doctorUpdate = z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
    profilePhoto: z.string().optional(),
});

export const DoctorValidations = {
    doctorUpdate,
};
