/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../utils/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import { SslServices } from '../ssl/ssl.service';
import { SSLValidationPayload } from '../ssl/ssl.interface';

const initPayment = async (appointmentId: string, baseUrl: string) => {
    const paymentInfo = await prisma.payment.findUniqueOrThrow({
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

    if (paymentInfo.status === 'PAID') {
        throw new ApiError(status.BAD_REQUEST, 'Appointment is already Paid');
    }
    if (paymentInfo.appointment.status === 'CANCELED') {
        throw new ApiError(
            status.BAD_REQUEST,
            'Appointment is already CANCELED',
        );
    }

    const data = {
        total_amount: paymentInfo.amount,
        tran_id: paymentInfo.transactionId,
        cus_name: paymentInfo.appointment.patient.name,
        cus_email: paymentInfo.appointment.patient.email,
        cus_add1: paymentInfo.appointment.patient.address,
        cus_phone: paymentInfo.appointment.patient.contactNumber,
    };

    const result = await SslServices.initPayment(data, baseUrl);

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

const paymentFailed = async (payload: SSLValidationPayload) => {
    if (payload.status !== 'FAILED' || !payload?.tran_id) {
        throw new ApiError(status.BAD_REQUEST, 'Invalid Request');
    }
    const paymentInfo = await prisma.payment.findUniqueOrThrow({
        where: {
            transactionId: payload.tran_id,
        },
        select: { id: true, status: true },
    });

    if (paymentInfo.status === 'PAID') {
        throw new ApiError(status.BAD_REQUEST, 'Already Paid');
    }
    await prisma.payment.update({
        where: { id: paymentInfo.id },
        data: {
            paymentGatewayData: payload as any,
        },
    });
};

const paymentCancelled = async (payload: SSLValidationPayload) => {
    if (payload.status !== 'CANCELLED' || !payload?.tran_id) {
        throw new ApiError(status.BAD_REQUEST, 'Invalid Request');
    }
    const paymentInfo = await prisma.payment.findUniqueOrThrow({
        where: {
            transactionId: payload.tran_id,
        },
        select: { id: true, status: true },
    });

    if (paymentInfo.status === 'PAID') {
        throw new ApiError(status.BAD_REQUEST, 'Already Paid');
    }
    await prisma.payment.update({
        where: { id: paymentInfo.id },
        data: {
            paymentGatewayData: payload as any,
        },
    });
};

export const PaymentServices = {
    initPayment,
    validatePayment,
    paymentFailed,
    paymentCancelled,
};
