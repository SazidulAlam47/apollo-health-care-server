import express from 'express';
import { SpecialtiesControllers } from './specialties.controller';
import { SpecialtiesValidations } from './specialties.validation';
import { upload } from '../../utils/sendImageToCloudinary';
import validateRequestWithFileCleanup from '../../middlewares/validateRequestWithFileCleanup';

const router = express.Router();

router.post(
    '/',
    upload.single('file'),
    validateRequestWithFileCleanup(SpecialtiesValidations.createSpecialties),
    SpecialtiesControllers.createSpecialties,
);

export const SpecialtiesRoutes = router;
