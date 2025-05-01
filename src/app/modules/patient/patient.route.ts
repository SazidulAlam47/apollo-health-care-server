import express from 'express';
import { PatientControllers } from './patient.controller';
import validateRequest from '../../middlewares/validateRequest';
import { PatientValidations } from './patient.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get(
    '/',
    auth('ADMIN', 'SUPER_ADMIN'),
    PatientControllers.getAllPatients,
);

router.get(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    PatientControllers.getPatientById,
);

router.delete(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    PatientControllers.deletePatientById,
);

router.patch(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    validateRequest(PatientValidations.patientUpdate),
    PatientControllers.updatePatientById,
);

export const PatientRoutes = router;
