"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientValidations = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../../../../generated/prisma");
const patientUpdate = zod_1.z.object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    contactNumber: zod_1.z
        .string()
        .regex(/^01\d{9}$/, {
        message: 'Number must be 11 digits and start with 01',
    })
        .optional(),
    address: zod_1.z.string().optional(),
    patientHealthData: zod_1.z
        .object({
        dateOfBirth: zod_1.z.string().datetime().optional(),
        gender: zod_1.z.nativeEnum(prisma_1.Gender).optional(),
        bloodGroup: zod_1.z.nativeEnum(prisma_1.BloodGroup).optional(),
        hasAllergies: zod_1.z.boolean().optional(),
        hasDiabetes: zod_1.z.boolean().optional(),
        height: zod_1.z.string().optional(),
        weight: zod_1.z.string().optional(),
        smokingStatus: zod_1.z.boolean().optional(),
        dietaryPreferences: zod_1.z.string().optional(),
        pregnancyStatus: zod_1.z.boolean().optional(),
        mentalHealthHistory: zod_1.z.string().optional(),
        immunizationStatus: zod_1.z.string().optional(),
        hasPastSurgeries: zod_1.z.boolean().optional(),
        recentAnxiety: zod_1.z.boolean().optional(),
        recentDepression: zod_1.z.boolean().optional(),
        maritalStatus: zod_1.z.nativeEnum(prisma_1.MaritalStatus).optional(),
    })
        .optional(),
    medicalReport: zod_1.z
        .object({
        reportName: zod_1.z.string(),
        reportLink: zod_1.z.string().url(),
    })
        .optional(),
});
exports.PatientValidations = {
    patientUpdate,
};
