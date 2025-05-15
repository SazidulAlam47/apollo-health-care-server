import prisma from '../../utils/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import { SslServices } from '../ssl/ssl.service';
import { SSLValidationPayload } from '../ssl/ssl.interface';

const initPayment = async (appointmentId: string, baseUrl: string) => {
    const paymentData = await prisma.payment.findUnique({
        where: {
            appointmentId,
        },
        include: {
            appointment: {
                include: {
                    patient: true,
                },
            },
        },
    });
    if (!paymentData) {
        throw new ApiError(status.NOT_FOUND, 'Payment Data not found');
    }

    const data = {
        total_amount: paymentData.amount,
        tran_id: paymentData.transactionId,
        cus_name: paymentData.appointment.patient.name,
        cus_email: paymentData.appointment.patient.email,
        cus_add1: paymentData.appointment.patient.address,
        cus_phone: paymentData.appointment.patient.contactNumber,
    };

    const result = await SslServices.initPayment(data, baseUrl);

    console.log({ paymentUlr: result.GatewayPageURL });

    return { paymentUlr: result.GatewayPageURL };
};

const validatePayment = async (payload: SSLValidationPayload) => {
    if (!payload?.val_id) {
        throw new ApiError(status.BAD_REQUEST, 'Payment Failed');
    }

    const sslResponse = await SslServices.validatePayment(payload);

    if (sslResponse.status !== 'VALID') {
        throw new ApiError(status.BAD_REQUEST, 'Payment Failed');
    }

    await prisma.$transaction(async (tx) => {
        const paymentData = await tx.payment.update({
            where: {
                transactionId: sslResponse.tran_id,
            },
            data: {
                status: 'PAID',
                paymentGatewayData: sslResponse,
            },
        });

        await tx.appointment.update({
            where: {
                id: paymentData.appointmentId,
            },
            data: {
                paymentStatus: 'PAID',
            },
        });
    });
};

export const PaymentServices = {
    initPayment,
    validatePayment,
};
