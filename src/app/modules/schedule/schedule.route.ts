import express from 'express';
import { ScheduleControllers } from './schedule.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ScheduleValidations } from './schedule.validation';

const router = express.Router();

router.get(
    '/',
    auth('DOCTOR', 'ADMIN', 'SUPER_ADMIN'),
    ScheduleControllers.getAllSchedules,
);

router.get(
    '/:id',
    auth('DOCTOR', 'ADMIN', 'SUPER_ADMIN'),
    ScheduleControllers.getScheduleById,
);

router.post(
    '/',
    auth('ADMIN', 'SUPER_ADMIN'),
    validateRequest(ScheduleValidations.createSchedule),
    ScheduleControllers.createSchedule,
);

router.delete(
    '/:id',
    auth('ADMIN', 'SUPER_ADMIN'),
    ScheduleControllers.deleteScheduleById,
);

export const ScheduleRoutes = router;
