import express from 'express';
import { PrescriptionControllers } from './prescription.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { PrescriptionValidations } from './prescription.validation';

const router = express.Router();

router.get(
    '/my-prescriptions',
    auth('PATIENT'),
    PrescriptionControllers.patientPrescriptions,
);

router.post(
    '/',
    auth('DOCTOR'),
    validateRequest(PrescriptionValidations.createPrescription),
    PrescriptionControllers.createPrescription,
);

export const PrescriptionRoutes = router;
