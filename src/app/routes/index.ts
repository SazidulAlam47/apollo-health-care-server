import { Router } from 'express';
import { SpecialtiesRoutes } from './../modules/specialties/specialties.route';
import { UserRoutes } from '../modules/user/user.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { DoctorRoutes } from '../modules/doctor/doctor.route';
import { PatientRoutes } from '../modules/patient/patient.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
