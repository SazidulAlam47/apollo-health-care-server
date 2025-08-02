"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidations = exports.newPasswordSchema = void 0;
const zod_1 = require("zod");
exports.newPasswordSchema = zod_1.z
    .string({ required_error: 'Please enter your New Password' })
    .min(6, 'Password must be at least 6 characters long')
    .refine((password) => /[a-zA-Z]/.test(password), 'Password must contain at least one letter')
    .refine((password) => /[a-z]/.test(password), 'Password must contain at least one lowercase letter')
    .refine((password) => /[A-Z]/.test(password), 'Password must contain at least one uppercase letter')
    .refine((password) => /[0-9]/.test(password), 'Password must contain at least one number')
    .refine((password) => /[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]/.test(password), 'Password must contain at least one special character');
const login = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
const changePassword = zod_1.z.object({
    oldPassword: zod_1.z.string(),
    newPassword: exports.newPasswordSchema,
});
const forgotPassword = zod_1.z.object({
    email: zod_1.z.string().email(),
});
const resetPassword = zod_1.z.object({
    id: zod_1.z.string(),
    password: exports.newPasswordSchema,
});
exports.AuthValidations = {
    login,
    changePassword,
    forgotPassword,
    resetPassword,
};
