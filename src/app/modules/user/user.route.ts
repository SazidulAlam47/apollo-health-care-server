import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import { UserValidations } from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';
import validateRequestWithFileCleanup from '../../middlewares/validateRequestWithFileCleanup';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', auth('ADMIN', 'SUPER_ADMIN'), UserControllers.getAllUsers);

router.get('/me', auth(), UserControllers.getMyProfile);

router.post(
    '/create-admin',
    auth('SUPER_ADMIN'),
    upload.single('file'),
    validateRequestWithFileCleanup(UserValidations.createAdmin),
    UserControllers.createAdmin,
);

router.post(
    '/create-doctor',
    auth('ADMIN', 'SUPER_ADMIN'),
    upload.single('file'),
    validateRequestWithFileCleanup(UserValidations.createDoctor),
    UserControllers.createDoctor,
);

router.post(
    '/create-patient',
    upload.single('file'),
    validateRequestWithFileCleanup(UserValidations.createPatient),
    UserControllers.createPatient,
);

router.patch(
    '/:id/status',
    auth('ADMIN', 'SUPER_ADMIN'),
    validateRequest(UserValidations.changeProfileStatus),
    UserControllers.changeProfileStatus,
);

router.patch(
    '/update-my-profile',
    auth('ADMIN', 'DOCTOR', 'PATIENT'),
    upload.single('file'),
    validateRequestWithFileCleanup(UserValidations.updateMyProfile),
    UserControllers.updateMyProfile,
);

export const UserRoutes = router;
