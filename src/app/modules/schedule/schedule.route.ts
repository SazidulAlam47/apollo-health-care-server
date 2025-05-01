import express from 'express';
import { ScheduleControllers } from './schedule.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ScheduleValidations } from './schedule.validation';

const router = express.Router();

router.post(
    '/',
    auth('ADMIN', 'SUPER_ADMIN'),
    validateRequest(ScheduleValidations.createSchedule),
    ScheduleControllers.createSchedule,
);

export const ScheduleRoutes = router;
