import { z } from 'zod';
import {
    BloodGroup,
    Gender,
    MaritalStatus,
} from '../../../../generated/prisma';

export const patientHealthDataSchema = z
    .object({
        dateOfBirth: z.string().datetime().optional(),
        gender: z.nativeEnum(Gender),
        bloodGroup: z.nativeEnum(BloodGroup).optional(),
        hasAllergies: z.boolean().default(false),
        hasDiabetes: z.boolean().default(false),
        height: z.string().optional(),
        weight: z.string().optional(),
        smokingStatus: z.boolean().default(false),
        dietaryPreferences: z.string().optional(),
        pregnancyStatus: z.boolean().default(false),
        mentalHealthHistory: z.string().optional(),
        immunizationStatus: z.string().optional(),
        hasPastSurgeries: z.boolean().default(false),
        recentAnxiety: z.boolean().default(false),
        recentDepression: z.boolean().default(false),
        maritalStatus: z.nativeEnum(MaritalStatus).optional(),
    })
    .optional();

export const medicalReportSchema = z
    .object({
        reportName: z.string(),
        reportLink: z.string().url(),
    })
    .optional();

const patientUpdate = z.object({
    name: z.string().optional(),
    contactNumber: z
        .string()
        .regex(/^01\d{9}$/, {
            message: 'Number must be 11 digits and start with 01',
        })
        .optional(),
    address: z.string().optional(),
    patientHealthData: patientHealthDataSchema,
    medicalReport: medicalReportSchema,
});

export const PatientValidations = {
    patientUpdate,
};
