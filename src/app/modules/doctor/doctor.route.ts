import express from 'express';
import { DoctorControllers } from './doctor.controller';
import validateRequest from '../../middlewares/validateRequest';
import { DoctorValidations } from './doctor.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth('ADMIN', 'SUPER_ADMIN'), DoctorControllers.getAllDoctors);

router.get(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    DoctorControllers.getDoctorById,
);

router.patch(
    '/:id',
    auth('DOCTOR'),
    validateRequest(DoctorValidations.doctorUpdate),
    DoctorControllers.updateDoctorById,
);

router.delete(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    DoctorControllers.deleteDoctorById,
);

export const DoctorRoutes = router;
