import { z } from 'zod';
import {
    BloodGroup,
    Gender,
    MaritalStatus,
} from '../../../../generated/prisma';

const patientUpdate = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    contactNumber: z.string().optional(),
    address: z.string().optional(),
    patientHealthData: z
        .object({
            dateOfBirth: z.string().optional(),
            gender: z.nativeEnum(Gender).optional(),
            bloodGroup: z.nativeEnum(BloodGroup).optional(),
            hasAllergies: z.boolean().optional(),
            hasDiabetes: z.boolean().optional(),
            height: z.string().optional(),
            weight: z.string().optional(),
            smokingStatus: z.boolean().optional(),
            dietaryPreferences: z.string().optional(),
            pregnancyStatus: z.boolean().optional(),
            mentalHealthHistory: z.string().optional(),
            immunizationStatus: z.string().optional(),
            hasPastSurgeries: z.boolean().optional(),
            recentAnxiety: z.boolean().optional(),
            recentDepression: z.boolean().optional(),
            maritalStatus: z.nativeEnum(MaritalStatus).optional(),
        })
        .optional(),
    medicalReport: z
        .object({
            reportName: z.string(),
            reportLink: z.string(),
        })
        .optional(),
});

export const PatientValidations = {
    patientUpdate,
};
