"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const specialties_route_1 = require("./../modules/specialties/specialties.route");
const user_route_1 = require("../modules/user/user.route");
const admin_route_1 = require("../modules/admin/admin.route");
const auth_route_1 = require("../modules/auth/auth.route");
const doctor_route_1 = require("../modules/doctor/doctor.route");
const patient_route_1 = require("../modules/patient/patient.route");
const schedule_route_1 = require("../modules/schedule/schedule.route");
const doctorSchedule_route_1 = require("../modules/doctorSchedule/doctorSchedule.route");
const appointment_route_1 = require("../modules/appointment/appointment.route");
const payment_route_1 = require("../modules/payment/payment.route");
const prescription_route_1 = require("../modules/prescription/prescription.route");
const review_route_1 = require("../modules/review/review.route");
const meta_route_1 = require("../modules/meta/meta.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/admins',
        route: admin_route_1.AdminRoutes,
    },
    {
        path: '/doctors',
        route: doctor_route_1.DoctorRoutes,
    },
    {
        path: '/patients',
        route: patient_route_1.PatientRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/specialties',
        route: specialties_route_1.SpecialtiesRoutes,
    },
    {
        path: '/schedules',
        route: schedule_route_1.ScheduleRoutes,
    },
    {
        path: '/doctor-schedules',
        route: doctorSchedule_route_1.DoctorScheduleRoutes,
    },
    {
        path: '/appointments',
        route: appointment_route_1.AppointmentRoutes,
    },
    {
        path: '/payments',
        route: payment_route_1.PaymentRoutes,
    },
    {
        path: '/prescriptions',
        route: prescription_route_1.PrescriptionRoutes,
    },
    {
        path: '/reviews',
        route: review_route_1.ReviewRoutes,
    },
    {
        path: '/meta',
        route: meta_route_1.MetaRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
