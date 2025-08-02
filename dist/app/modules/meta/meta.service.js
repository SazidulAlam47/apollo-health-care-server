"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaServices = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const getDashboardMetaData = (decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    switch (decodedUser.role) {
        case 'SUPER_ADMIN':
            return yield getSuperAdminMetaData();
        case 'ADMIN':
            return yield getAdminMetaData();
        case 'DOCTOR':
            return yield getDoctorMetaData(decodedUser);
        case 'PATIENT':
            return yield getPatientMetaData(decodedUser);
        default:
            return null;
    }
});
const getSuperAdminMetaData = () => __awaiter(void 0, void 0, void 0, function* () {
    const doctorCount = yield prisma_1.default.doctor.count();
    const patientCount = yield prisma_1.default.patient.count();
    const adminCount = yield prisma_1.default.admin.count();
    const appointmentCount = yield prisma_1.default.appointment.count({
        where: {
            status: {
                not: 'CANCELED',
            },
        },
    });
    const paymentCount = yield prisma_1.default.payment.count({
        where: {
            status: 'PAID',
        },
    });
    const totalRevenue = yield prisma_1.default.payment.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            status: 'PAID',
        },
    });
    const appointmentCountByMonth = yield getBarChartData();
    const appointmentStatusDistribution = yield getPieChartData();
    return {
        doctorCount,
        patientCount,
        adminCount,
        appointmentCount,
        paymentCount,
        totalRevenue: totalRevenue._sum.amount,
        appointmentCountByMonth,
        appointmentStatusDistribution,
    };
});
const getAdminMetaData = () => __awaiter(void 0, void 0, void 0, function* () {
    const doctorCount = yield prisma_1.default.doctor.count();
    const patientCount = yield prisma_1.default.patient.count();
    const appointmentCount = yield prisma_1.default.appointment.count({
        where: {
            status: {
                not: 'CANCELED',
            },
        },
    });
    const paymentCount = yield prisma_1.default.payment.count({
        where: {
            status: 'PAID',
        },
    });
    const totalRevenue = yield prisma_1.default.payment.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            status: 'PAID',
        },
    });
    const appointmentCountByMonth = yield getBarChartData();
    const appointmentStatusDistribution = yield getPieChartData();
    return {
        doctorCount,
        patientCount,
        appointmentCount,
        paymentCount,
        totalRevenue: totalRevenue._sum.amount,
        appointmentCountByMonth,
        appointmentStatusDistribution,
    };
});
const getDoctorMetaData = (decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentCount = yield prisma_1.default.appointment.count({
        where: {
            status: {
                not: 'CANCELED',
            },
            doctor: {
                email: decodedUser.email,
            },
        },
    });
    const patientCount = yield prisma_1.default.appointment.groupBy({
        by: ['patientId'],
        where: {
            status: {
                not: 'CANCELED',
            },
            doctor: {
                email: decodedUser.email,
            },
        },
    });
    const reviewCount = yield prisma_1.default.review.count({
        where: {
            doctor: {
                email: decodedUser.email,
            },
        },
    });
    const totalRevenue = yield prisma_1.default.payment.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            status: 'PAID',
            appointment: {
                doctor: {
                    email: decodedUser.email,
                },
            },
        },
    });
    const appointmentStatusDistribution = yield prisma_1.default.appointment.groupBy({
        by: ['status'],
        _count: true,
        where: {
            doctor: {
                email: decodedUser.email,
            },
        },
    });
    const formattedAppointmentStatusDistribution = appointmentStatusDistribution.map((item) => ({
        status: item.status,
        count: item._count,
    }));
    return {
        appointmentCount,
        patientCount: patientCount.length,
        reviewCount,
        totalRevenue: totalRevenue._sum.amount || 0,
        appointmentStatusDistribution: formattedAppointmentStatusDistribution,
    };
});
const getPatientMetaData = (decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentCount = yield prisma_1.default.appointment.count({
        where: {
            status: {
                not: 'CANCELED',
            },
            patient: {
                email: decodedUser.email,
            },
        },
    });
    const prescriptionCount = yield prisma_1.default.prescription.count({
        where: {
            patient: {
                email: decodedUser.email,
            },
        },
    });
    const reviewCount = yield prisma_1.default.review.count({
        where: {
            patient: {
                email: decodedUser.email,
            },
        },
    });
    const appointmentStatusDistribution = yield prisma_1.default.appointment.groupBy({
        by: ['status'],
        _count: true,
        where: {
            patient: {
                email: decodedUser.email,
            },
        },
    });
    const formattedAppointmentStatusDistribution = appointmentStatusDistribution.map((item) => ({
        status: item.status,
        count: item._count,
    }));
    return {
        appointmentCount,
        prescriptionCount,
        reviewCount,
        appointmentStatusDistribution: formattedAppointmentStatusDistribution,
    };
});
const getBarChartData = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentCountByMonth = yield prisma_1.default.$queryRaw `
        SELECT DATE_TRUNC('month', "createdAt") AS "month", CAST(COUNT(*) AS INTEGER) AS count FROM appointments
        GROUP BY "month"
        ORDER BY "month" ASC
    `;
    return appointmentCountByMonth.map((item) => ({
        month: item.month.toLocaleString('en-US', { month: 'long' }),
        count: item.count,
    }));
});
const getPieChartData = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentStatusDistribution = yield prisma_1.default.appointment.groupBy({
        by: ['status'],
        _count: true,
    });
    const formattedAppointmentStatusDistribution = appointmentStatusDistribution.map((item) => ({
        status: item.status,
        count: item._count,
    }));
    return formattedAppointmentStatusDistribution;
});
exports.MetaServices = {
    getDashboardMetaData,
};
