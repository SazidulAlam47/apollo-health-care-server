import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';
import fromDataToJson from '../../middlewares/fromDataToJson';

const router = express.Router();

router.post(
    '/create-admin',
    auth('ADMIN', 'SUPER_ADMIN'),
    upload.single('file'),
    fromDataToJson,
    validateRequest(UserValidations.createAdminValidationSchema),
    UserController.createAdmin,
);

export const UserRoutes = router;
