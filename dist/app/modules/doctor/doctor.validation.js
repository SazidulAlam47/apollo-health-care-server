"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorValidations = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../../../../generated/prisma");
const doctorUpdate = zod_1.z.object({
    name: zod_1.z.string().optional(),
    contactNumber: zod_1.z
        .string()
        .regex(/^01\d{9}$/, {
        message: 'Number must be 11 digits and start with 01',
    })
        .optional(),
    address: zod_1.z.string().optional(),
    registrationNumber: zod_1.z.string().optional(),
    experience: zod_1.z.number().optional(),
    gender: zod_1.z.nativeEnum(prisma_1.Gender).optional(),
    appointmentFee: zod_1.z.number().optional(),
    qualification: zod_1.z.string().optional(),
    currentWorkingPlace: zod_1.z.string().optional(),
    designation: zod_1.z.string().optional(),
    averageRating: zod_1.z.number().optional(),
    specialties: zod_1.z
        .array(zod_1.z.object({
        specialtiesId: zod_1.z.string(),
        isDeleted: zod_1.z.boolean(),
    }))
        .optional(),
});
exports.DoctorValidations = {
    doctorUpdate,
};
