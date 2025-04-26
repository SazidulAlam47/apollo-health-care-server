import { z } from 'zod';
import { Gender, UserStatus } from '../../../../generated/prisma';

const createAdmin = z.object({
    password: z.string(),
    admin: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNumber: z.string(),
    }),
});

const createDoctor = z.object({
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

const createPatient = z.object({
    password: z.string(),
    patient: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNumber: z.string(),
        address: z.string().optional(),
    }),
});

const changeProfileStatus = z.object({
    status: z.enum(Object.values(UserStatus) as [string, ...string[]]),
});

const updateMyProfile = z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
    address: z.string().optional(),
    registrationNumber: z.string().optional(),
    experience: z.number().optional(),
    appointmentFee: z.number().optional(),
    qualification: z.string().optional(),
    currentWorkingPlace: z.string().optional(),
    designation: z.string().optional(),
});

export const UserValidations = {
    createAdmin,
    createDoctor,
    createPatient,
    changeProfileStatus,
    updateMyProfile,
};
