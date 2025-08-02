"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidations = void 0;
const zod_1 = require("zod");
const adminUpdate = zod_1.z.object({
    name: zod_1.z.string().optional(),
    contactNumber: zod_1.z
        .string()
        .regex(/^01\d{9}$/, {
        message: 'Number must be 11 digits and start with 01',
    })
        .optional(),
});
exports.AdminValidations = {
    adminUpdate,
};
