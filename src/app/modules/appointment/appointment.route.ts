import express from 'express';
import { AppointmentControllers } from './appointment.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/', auth('PATIENT'), AppointmentControllers.createAppointment);

export const AppointmentRoutes = router;
