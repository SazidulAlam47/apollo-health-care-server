import { TDecodedUser } from '../../interfaces/jwt.interface';
import prisma from '../../utils/prisma';

const getDashboardMetaData = async (decodedUser: TDecodedUser) => {
    switch (decodedUser.role) {
        case 'SUPER_ADMIN':
            return await getSuperAdminMetaData();

        case 'ADMIN':
            return await getAdminMetaData();

        case 'DOCTOR':
            return await getDoctorMetaData(decodedUser);

        case 'PATIENT':
            return await getPatientMetaData(decodedUser);

        default:
            return null;
    }
};

const getSuperAdminMetaData = async () => {
    const doctorCount = await prisma.doctor.count();
    const patientCount = await prisma.patient.count();
    const adminCount = await prisma.admin.count();

    const appointmentCount = await prisma.appointment.count({
        where: {
            status: {
                not: 'CANCELED',
            },
        },
    });
    const paymentCount = await prisma.payment.count({
        where: {
            status: 'PAID',
        },
    });

    const totalRevenue = await prisma.payment.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            status: 'PAID',
        },
    });

    const appointmentCountByMonth = await getBarChartData();
    const appointmentStatusDistribution = await getPieChartData();

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
};

const getAdminMetaData = async () => {
    const doctorCount = await prisma.doctor.count();
    const patientCount = await prisma.patient.count();
    const appointmentCount = await prisma.appointment.count({
        where: {
            status: {
                not: 'CANCELED',
            },
        },
    });
    const paymentCount = await prisma.payment.count({
        where: {
            status: 'PAID',
        },
    });

    const totalRevenue = await prisma.payment.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            status: 'PAID',
        },
    });

    const appointmentCountByMonth = await getBarChartData();
    const appointmentStatusDistribution = await getPieChartData();

    return {
        doctorCount,
        patientCount,
        appointmentCount,
        paymentCount,
        totalRevenue: totalRevenue._sum.amount,
        appointmentCountByMonth,
        appointmentStatusDistribution,
    };
};

const getDoctorMetaData = async (decodedUser: TDecodedUser) => {
    const appointmentCount = await prisma.appointment.count({
        where: {
            status: {
                not: 'CANCELED',
            },
            doctor: {
                email: decodedUser.email,
            },
        },
    });

    const patientCount = await prisma.appointment.groupBy({
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

    const reviewCount = await prisma.review.count({
        where: {
            doctor: {
                email: decodedUser.email,
            },
        },
    });

    const totalRevenue = await prisma.payment.aggregate({
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

    const appointmentStatusDistribution = await prisma.appointment.groupBy({
        by: ['status'],
        _count: true,
        where: {
            doctor: {
                email: decodedUser.email,
            },
        },
    });

    const formattedAppointmentStatusDistribution =
        appointmentStatusDistribution.map((item) => ({
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
};

const getPatientMetaData = async (decodedUser: TDecodedUser) => {
    const appointmentCount = await prisma.appointment.count({
        where: {
            status: {
                not: 'CANCELED',
            },
            patient: {
                email: decodedUser.email,
            },
        },
    });

    const prescriptionCount = await prisma.prescription.count({
        where: {
            patient: {
                email: decodedUser.email,
            },
        },
    });

    const reviewCount = await prisma.review.count({
        where: {
            patient: {
                email: decodedUser.email,
            },
        },
    });

    const appointmentStatusDistribution = await prisma.appointment.groupBy({
        by: ['status'],
        _count: true,
        where: {
            patient: {
                email: decodedUser.email,
            },
        },
    });

    const formattedAppointmentStatusDistribution =
        appointmentStatusDistribution.map((item) => ({
            status: item.status,
            count: item._count,
        }));

    return {
        appointmentCount,
        prescriptionCount,
        reviewCount,
        appointmentStatusDistribution: formattedAppointmentStatusDistribution,
    };
};

const getBarChartData = async () => {
    const appointmentCountByMonth: { month: Date; count: number }[] =
        await prisma.$queryRaw`
        SELECT DATE_TRUNC('month', "createdAt") AS "month", CAST(COUNT(*) AS INTEGER) AS count FROM appointments
        GROUP BY "month"
        ORDER BY "month" ASC
    `;

    return appointmentCountByMonth.map((item) => ({
        month: item.month.toLocaleString('en-US', { month: 'long' }),
        count: item.count,
    }));
};

const getPieChartData = async () => {
    const appointmentStatusDistribution = await prisma.appointment.groupBy({
        by: ['status'],
        _count: true,
    });

    const formattedAppointmentStatusDistribution =
        appointmentStatusDistribution.map((item) => ({
            status: item.status,
            count: item._count,
        }));

    return formattedAppointmentStatusDistribution;
};

export const MetaServices = {
    getDashboardMetaData,
};
