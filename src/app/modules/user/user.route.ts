import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import { UserValidations } from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';
import validateRequestWithFileCleanup from '../../middlewares/validateRequestWithFileCleanup';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', auth('ADMIN', 'SUPER_ADMIN'), UserControllers.getAllUsers);

router.post(
    '/create-admin',
    auth('ADMIN', 'SUPER_ADMIN'),
    upload.single('file'),
    validateRequestWithFileCleanup(UserValidations.createAdminValidationSchema),
    UserControllers.createAdmin,
);

router.post(
    '/create-doctor',
    auth('ADMIN', 'SUPER_ADMIN'),
    upload.single('file'),
    validateRequestWithFileCleanup(
        UserValidations.createDoctorValidationSchema,
    ),
    UserControllers.createDoctor,
);

router.post(
    '/create-patient',
    upload.single('file'),
    validateRequestWithFileCleanup(
        UserValidations.createPatientValidationSchema,
    ),
    UserControllers.createPatient,
);

router.patch(
    '/:id/status',
    auth('ADMIN', 'SUPER_ADMIN'),
    validateRequest(UserValidations.changeProfileStatusValidationSchema),
    UserControllers.changeProfileStatus,
);

export const UserRoutes = router;
