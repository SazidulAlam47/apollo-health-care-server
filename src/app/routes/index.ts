import { Router } from 'express';
import { SpecialtiesRoutes } from './../modules/specialties/specialties.route';
import { UserRoutes } from '../modules/user/user.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { DoctorRoutes } from '../modules/doctor/doctor.route';
import { PatientRoutes } from '../modules/patient/patient.route';
import { ScheduleRoutes } from '../modules/schedule/schedule.route';
import { DoctorScheduleRoutes } from '../modules/doctorSchedule/doctorSchedule.route';
import { AppointmentRoutes } from '../modules/appointment/appointment.route';
import { PaymentRoutes } from '../modules/payment/payment.route';
import { PrescriptionRoutes } from '../modules/prescription/prescription.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { MetaRoutes } from '../modules/meta/meta.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/admins',
        route: AdminRoutes,
    },
    {
        path: '/doctors',
        route: DoctorRoutes,
    },
    {
        path: '/patients',
        route: PatientRoutes,
    },
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/specialties',
        route: SpecialtiesRoutes,
    },
    {
        path: '/schedules',
        route: ScheduleRoutes,
    },
    {
        path: '/doctor-schedules',
        route: DoctorScheduleRoutes,
    },
    {
        path: '/appointments',
        route: AppointmentRoutes,
    },
    {
        path: '/payments',
        route: PaymentRoutes,
    },
    {
        path: '/prescriptions',
        route: PrescriptionRoutes,
    },
    {
        path: '/reviews',
        route: ReviewRoutes,
    },
    {
        path: '/meta',
        route: MetaRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
