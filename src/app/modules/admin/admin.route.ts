import express from 'express';
import { AdminControllers } from './admin.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidations } from './admin.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth('ADMIN', 'SUPER_ADMIN'), AdminControllers.getAllAdmins);

router.get('/:id', auth('ADMIN', 'SUPER_ADMIN'), AdminControllers.getAdminById);

router.patch(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    validateRequest(AdminValidations.adminUpdate),
    AdminControllers.updateAdminById,
);

router.delete(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    AdminControllers.deleteAdminById,
);

export const AdminRoutes = router;
