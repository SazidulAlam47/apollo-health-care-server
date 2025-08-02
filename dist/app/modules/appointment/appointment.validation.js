"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentValidations = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../../../../generated/prisma");
const createAppointment = zod_1.z.object({
    doctorId: zod_1.z.string(),
    scheduleId: zod_1.z.string(),
});
const changeAppointmentStatus = zod_1.z.object({
    status: zod_1.z.enum([
        prisma_1.AppointmentStatus.IN_PROGRESS,
        prisma_1.AppointmentStatus.COMPLETED,
    ]),
});
exports.AppointmentValidations = {
    createAppointment,
    changeAppointmentStatus,
};
