import express from 'express';
import { SpecialtiesControllers } from './specialties.controller';
import { SpecialtiesValidations } from './specialties.validation';
import { upload } from '../../utils/sendImageToCloudinary';
import validateRequestWithFileCleanup from '../../middlewares/validateRequestWithFileCleanup';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', SpecialtiesControllers.getAllSpecialties);

router.post(
    '/',
    auth('ADMIN', 'SUPER_ADMIN'),
    upload.single('file'),
    validateRequestWithFileCleanup(SpecialtiesValidations.createSpecialties),
    SpecialtiesControllers.createSpecialties,
);

router.delete(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    SpecialtiesControllers.deleteSpecialtiesById,
);

export const SpecialtiesRoutes = router;
