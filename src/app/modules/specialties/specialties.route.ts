import express from 'express';
import { SpecialtiesControllers } from './specialties.controller';
import { SpecialtiesValidations } from './specialties.validation';
import { upload } from '../../utils/sendImageToCloudinary';
import validateRequestWithFileCleanup from '../../middlewares/validateRequestWithFileCleanup';

const router = express.Router();

router.get('/', SpecialtiesControllers.getAllSpecialties);

router.post(
    '/',
    upload.single('file'),
    validateRequestWithFileCleanup(SpecialtiesValidations.createSpecialties),
    SpecialtiesControllers.createSpecialties,
);

router.delete('/:id', SpecialtiesControllers.deleteSpecialtiesById);

export const SpecialtiesRoutes = router;
