import { z } from 'zod';
import { Gender, UserStatus } from '../../../../generated/prisma';
import { newPasswordSchema } from '../auth/auth.validation';

const createAdmin = z.object({
    password: z.string(),
    admin: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNumber: z.string().regex(/^01\d{9}$/, {
            message: 'Number must be 11 digits and start with 01',
        }),
    }),
});

const createDoctor = z.object({
    password: z.string(),
    doctor: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNumber: z.string().regex(/^01\d{9}$/, {
            message: 'Number must be 11 digits and start with 01',
        }),
        address: z.string().optional(),
        registrationNumber: z.string(),
        experience: z.number().default(0),
        gender: z.nativeEnum(Gender),
        appointmentFee: z.number(),
        qualification: z.string(),
        currentWorkingPlace: z.string(),
        designation: z.string(),
    }),
});

const createPatient = z.object({
    password: newPasswordSchema,
    patient: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNumber: z.string().regex(/^01\d{9}$/, {
            message: 'Number must be 11 digits and start with 01',
        }),
        address: z.string().optional(),
    }),
});

const changeProfileStatus = z.object({
    status: z.nativeEnum(UserStatus),
});

const updateMyProfile = z.object({
    name: z.string().optional(),
    contactNumber: z
        .string()
        .regex(/^01\d{9}$/, {
            message: 'Number must be 11 digits and start with 01',
        })
        .optional(),
    address: z.string().optional(),
    registrationNumber: z.string().optional(),
    experience: z.number().optional(),
    appointmentFee: z.number().optional(),
    qualification: z.string().optional(),
    currentWorkingPlace: z.string().optional(),
    designation: z.string().optional(),
    specialties: z
        .array(
            z.object({
                specialtiesId: z.string(),
                isDeleted: z.boolean(),
            }),
        )
        .optional(),
});

export const UserValidations = {
    createAdmin,
    createDoctor,
    createPatient,
    changeProfileStatus,
    updateMyProfile,
};
