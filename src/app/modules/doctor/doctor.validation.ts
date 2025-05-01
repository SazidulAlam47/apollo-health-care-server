import { z } from 'zod';
import { Gender } from '../../../../generated/prisma';

const doctorUpdate = z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
    address: z.string().optional(),
    registrationNumber: z.string().optional(),
    experience: z.number().optional(),
    gender: z.nativeEnum(Gender).optional(),
    appointmentFee: z.number().optional(),
    qualification: z.string().optional(),
    currentWorkingPlace: z.string().optional(),
    designation: z.string().optional(),
    averageRating: z.number().optional(),
    specialties: z
        .array(
            z.object({
                specialtiesId: z.string(),
                isDeleted: z.boolean(),
            }),
        )
        .optional(),
});

export const DoctorValidations = {
    doctorUpdate,
};
