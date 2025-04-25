import { z } from 'zod';
import { Gender, UserStatus } from '../../../../generated/prisma';

const createAdminValidationSchema = z.object({
    password: z.string(),
    admin: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNumber: z.string(),
    }),
});

const createDoctorValidationSchema = z.object({
    password: z.string(),
    doctor: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNumber: z.string(),
        address: z.string().optional(),
        registrationNumber: z.string(),
        experience: z.number().default(0),
        gender: z.enum([Gender.MALE, Gender.FEMALE]),
        appointmentFee: z.number(),
        qualification: z.string(),
        currentWorkingPlace: z.string(),
        designation: z.string(),
        averageRating: z.number(),
    }),
});

const createPatientValidationSchema = z.object({
    password: z.string(),
    patient: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNumber: z.string(),
        address: z.string().optional(),
    }),
});

const changeProfileStatusValidationSchema = z.object({
    status: z.enum(Object.values(UserStatus) as [string, ...string[]]),
});

export const UserValidations = {
    createAdminValidationSchema,
    createDoctorValidationSchema,
    createPatientValidationSchema,
    changeProfileStatusValidationSchema,
};
