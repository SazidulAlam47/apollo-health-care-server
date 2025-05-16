import express from 'express';
import { AppointmentControllers } from './appointment.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AppointmentValidations } from './appointment.validation';

const router = express.Router();

router.get(
    '/',
    auth('ADMIN', 'SUPER_ADMIN'),
    AppointmentControllers.getAllAppointments,
);

router.get(
    '/my-appointments',
    auth('DOCTOR', 'PATIENT'),
    AppointmentControllers.getMyAppointments,
);

router.post(
    '/',
    auth('PATIENT'),
    validateRequest(AppointmentValidations.createAppointment),
    AppointmentControllers.createAppointment,
);

router.patch(
    '/status/:id',
    auth('DOCTOR', 'ADMIN', 'SUPER_ADMIN'),
    validateRequest(AppointmentValidations.changeAppointmentStatus),
    AppointmentControllers.changeAppointmentStatus,
);

export const AppointmentRoutes = router;
