"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleValidations = void 0;
const zod_1 = require("zod");
const pad_1 = __importDefault(require("../../utils/pad"));
const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/;
const now = new Date();
const today = new Date(`${now.getFullYear()}-${(0, pad_1.default)(now.getMonth() + 1)}-${(0, pad_1.default)(now.getDate())}T00:00:00.000Z`);
const createSchedule = zod_1.z
    .object({
    startDate: zod_1.z
        .string()
        .date()
        .refine((value) => today <= new Date(value), {
        message: "Start date can't be in the past.",
    }),
    endDate: zod_1.z
        .string()
        .date()
        .refine((value) => today <= new Date(value), {
        message: "End date can't be in the past.",
    }),
    startTime: zod_1.z.string().regex(timeRegex, {
        message: 'Invalid time format',
    }),
    endTime: zod_1.z.string().regex(timeRegex, {
        message: 'Invalid time format',
    }),
})
    .refine((values) => {
    const startDateTime = new Date(`${values.startDate}T${values.startTime}:00`);
    return now <= startDateTime;
}, {
    message: "Start Time can't be in the past",
    path: ['startTime'],
})
    .refine((values) => {
    const endDateTime = new Date(`${values.endDate}T${values.endTime}:00`);
    return now <= endDateTime;
}, {
    message: "End Time can't be in the past",
    path: ['endTime'],
})
    .refine((values) => new Date(values.startDate) <= new Date(values.endDate), {
    message: 'startDate must be before endDate',
    path: ['startDate', 'endDate'],
})
    .refine((values) => {
    const startDateTime = new Date(`${values.startDate}T${values.startTime}:00`);
    const endDateTime = new Date(`${values.endDate}T${values.endTime}:00`);
    return startDateTime < endDateTime;
}, {
    message: 'startTime must be before endTime',
    path: ['startTime', 'endTime'],
});
exports.ScheduleValidations = {
    createSchedule,
};
