import express from 'express';
import auth from '../../middlewares/auth';
import { DoctorScheduleControllers } from './doctorSchedule.controller';
import validateRequest from '../../middlewares/validateRequest';
import { DoctorScheduleValidations } from './doctorSchedule.validation';

const router = express.Router();

router.get(
    '/my-schedule',
    auth('DOCTOR'),
    DoctorScheduleControllers.getMySchedules,
);

router.post(
    '/',
    auth('DOCTOR'),
    validateRequest(DoctorScheduleValidations.createDoctorSchedule),
    DoctorScheduleControllers.createDoctorSchedule,
);

export const DoctorScheduleRoutes = router;
