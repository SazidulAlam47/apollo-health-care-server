import express from 'express';
import { AdminControllers } from './admin.controller';

const router = express.Router();

router.get('/', AdminControllers.getAllAdmins);

router.get('/:id', AdminControllers.getAdminById);

router.patch('/:id', AdminControllers.updateAdminById);

router.delete('/:id', AdminControllers.deleteAdminById);

export const AdminRoutes = router;
