import express from 'express';
import { AppointmentControllers } from './appointment.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get(
    '/my-appointments',
    auth('DOCTOR', 'PATIENT'),
    AppointmentControllers.getMyAppointments,
);

router.post('/', auth('PATIENT'), AppointmentControllers.createAppointment);

export const AppointmentRoutes = router;
