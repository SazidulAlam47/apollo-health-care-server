import { z } from 'zod';

const loginValidationSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

const changePasswordValidationSchema = z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
});

export const AuthValidations = {
    loginValidationSchema,
    changePasswordValidationSchema,
};
