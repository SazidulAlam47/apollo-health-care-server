"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../../../../generated/prisma");
const auth_validation_1 = require("../auth/auth.validation");
const createAdmin = zod_1.z.object({
    password: zod_1.z.string(),
    admin: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        contactNumber: zod_1.z.string().regex(/^01\d{9}$/, {
            message: 'Number must be 11 digits and start with 01',
        }),
    }),
});
const createDoctor = zod_1.z.object({
    password: zod_1.z.string(),
    doctor: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        contactNumber: zod_1.z.string().regex(/^01\d{9}$/, {
            message: 'Number must be 11 digits and start with 01',
        }),
        address: zod_1.z.string().optional(),
        registrationNumber: zod_1.z.string(),
        experience: zod_1.z.number().default(0),
        gender: zod_1.z.nativeEnum(prisma_1.Gender),
        appointmentFee: zod_1.z.number(),
        qualification: zod_1.z.string(),
        currentWorkingPlace: zod_1.z.string(),
        designation: zod_1.z.string(),
    }),
});
const createPatient = zod_1.z.object({
    password: auth_validation_1.newPasswordSchema,
    patient: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        contactNumber: zod_1.z.string().regex(/^01\d{9}$/, {
            message: 'Number must be 11 digits and start with 01',
        }),
        address: zod_1.z.string().optional(),
    }),
});
const changeProfileStatus = zod_1.z.object({
    status: zod_1.z.nativeEnum(prisma_1.UserStatus),
});
const updateMyProfile = zod_1.z.object({
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
    appointmentFee: zod_1.z.number().optional(),
    qualification: zod_1.z.string().optional(),
    currentWorkingPlace: zod_1.z.string().optional(),
    designation: zod_1.z.string().optional(),
    specialties: zod_1.z
        .array(zod_1.z.object({
        specialtiesId: zod_1.z.string(),
        isDeleted: zod_1.z.boolean(),
    }))
        .optional(),
});
exports.UserValidations = {
    createAdmin,
    createDoctor,
    createPatient,
    changeProfileStatus,
    updateMyProfile,
};
