"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionValidations = void 0;
const zod_1 = require("zod");
const createPrescription = zod_1.z.object({
    appointmentId: zod_1.z.string(),
    instructions: zod_1.z.string(),
    followUpDate: zod_1.z.string().datetime().optional(),
});
exports.PrescriptionValidations = {
    createPrescription,
};
