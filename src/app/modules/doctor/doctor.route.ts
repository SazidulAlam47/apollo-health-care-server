import express from 'express';
import { DoctorControllers } from './doctor.controller';
import validateRequest from '../../middlewares/validateRequest';
import { DoctorValidations } from './doctor.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', DoctorControllers.getAllDoctors);

router.get('/:id', DoctorControllers.getDoctorById);

router.delete(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    DoctorControllers.deleteDoctorById,
);

router.patch(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    validateRequest(DoctorValidations.doctorUpdate),
    DoctorControllers.updateDoctorById,
);

export const DoctorRoutes = router;
