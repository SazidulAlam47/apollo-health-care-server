import express from 'express';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidations } from './auth.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
    '/login',
    validateRequest(AuthValidations.login),
    AuthControllers.loginUser,
);

router.get('/logout', AuthControllers.logoutUser);

router.get('/refresh-token', AuthControllers.refreshToken);

router.post(
    '/change-password',
    auth(),
    validateRequest(AuthValidations.changePassword),
    AuthControllers.changePassword,
);

router.post(
    '/forgot-password',
    validateRequest(AuthValidations.forgotPassword),
    AuthControllers.forgotPassword,
);

router.post(
    '/reset-password',
    validateRequest(AuthValidations.resetPassword),
    AuthControllers.resetPassword,
);

export const AuthRoutes = router;
