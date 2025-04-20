import express from 'express';
import { AdminControllers } from './admin.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidations } from './admin.validation';

const router = express.Router();

router.get('/', AdminControllers.getAllAdmins);

router.get('/:id', AdminControllers.getAdminById);

router.patch(
    '/:id',
    validateRequest(AdminValidations.adminUpdateValidationSchema),
    AdminControllers.updateAdminById,
);

router.delete('/:id', AdminControllers.deleteAdminById);

export const AdminRoutes = router;
