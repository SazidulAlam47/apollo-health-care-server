import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { UserValidations } from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';
import validateRequestWithFileCleanup from '../../middlewares/validateRequestWithFileCleanup';

const router = express.Router();

router.post(
    '/create-admin',
    auth('ADMIN', 'SUPER_ADMIN'),
    upload.single('file'),
    validateRequestWithFileCleanup(UserValidations.createAdminValidationSchema),
    UserController.createAdmin,
);

router.post(
    '/create-doctor',
    auth('ADMIN', 'SUPER_ADMIN'),
    upload.single('file'),
    validateRequestWithFileCleanup(
        UserValidations.createDoctorValidationSchema,
    ),
    UserController.createDoctor,
);

router.post(
    '/create-patient',
    upload.single('file'),
    validateRequestWithFileCleanup(
        UserValidations.createPatientValidationSchema,
    ),
    UserController.createPatient,
);

export const UserRoutes = router;
