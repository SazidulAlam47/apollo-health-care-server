import { z } from 'zod';

export const newPasswordSchema = z
    .string({ required_error: 'Please enter your New Password' })
    .min(6, 'Password must be at least 6 characters long')
    .refine(
        (password) => /[a-zA-Z]/.test(password),
        'Password must contain at least one letter',
    )
    .refine(
        (password) => /[a-z]/.test(password),
        'Password must contain at least one lowercase letter',
    )
    .refine(
        (password) => /[A-Z]/.test(password),
        'Password must contain at least one uppercase letter',
    )
    .refine(
        (password) => /[0-9]/.test(password),
        'Password must contain at least one number',
    )
    .refine(
        (password) => /[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]/.test(password),
        'Password must contain at least one special character',
    );

const login = z.object({
    email: z.string().email(),
    password: z.string(),
});

const changePassword = z.object({
    oldPassword: z.string(),
    newPassword: newPasswordSchema,
});

const forgotPassword = z.object({
    email: z.string().email(),
});

const resetPassword = z.object({
    id: z.string(),
    password: newPasswordSchema,
});

export const AuthValidations = {
    login,
    changePassword,
    forgotPassword,
    resetPassword,
};
