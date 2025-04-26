import { z } from 'zod';

const login = z.object({
    email: z.string().email(),
    password: z.string(),
});

const changePassword = z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
});

const forgotPassword = z.object({
    email: z.string().email(),
});

const resetPassword = z.object({
    id: z.string(),
    password: z.string(),
});

export const AuthValidations = {
    login,
    changePassword,
    forgotPassword,
    resetPassword,
};
