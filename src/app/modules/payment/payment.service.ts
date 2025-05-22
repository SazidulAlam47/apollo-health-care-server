/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../utils/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import { SslServices } from '../ssl/ssl.service';
import { SSLValidationPayload } from '../ssl/ssl.interface';
import createInvoice from '../../utils/createInvoice';
import sendEmail from '../../utils/sendEmail';
import pad from '../../utils/pad';
import { convertDataTimeToLocal } from '../../utils/convertDataTime';

const now = convertDataTimeToLocal(new Date());

const initPayment = async (appointmentId: string, baseUrl: string) => {
    const paymentInfo = await prisma.payment.findUniqueOrThrow({
        where: {
            appointmentId,
        },
        include: {
            appointment: {
                include: {
                    patient: true,
                    schedule: true,
                },
            },
        },
    });

    if (paymentInfo.status === 'PAID') {
        throw new ApiError(status.BAD_REQUEST, 'Appointment is already PAID');
    }
    if (paymentInfo.appointment.status !== 'SCHEDULED') {
        throw new ApiError(
            status.BAD_REQUEST,
            `Appointment is already ${paymentInfo.appointment.status}`,
        );
    }
    if (paymentInfo.appointment.schedule.startDateTime < now) {
        throw new ApiError(
            status.BAD_REQUEST,
            'Appointment can not be in past',
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
            include: {
                appointment: {
                    include: {
                        doctor: true,
                        patient: true,
                        schedule: true,
                    },
                },
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

        // send invoice email
        const patientEmail = paymentData.appointment.patient.email;
        const patientName = paymentData.appointment.patient.name;
        const doctorName = paymentData.appointment.doctor.name;

        const appointmentDate = `${paymentData.appointment.schedule.startDateTime.getUTCDate()}-${paymentData.appointment.schedule.startDateTime.getUTCMonth()}-${paymentData.appointment.schedule.startDateTime.getUTCFullYear()}`;
        const appointmentTime = `${paymentData.appointment.schedule.startDateTime.getUTCHours()}:${pad(paymentData.appointment.schedule.startDateTime.getUTCMinutes())}`;

        // const appointmentDate =

        const pdfBuffer = await createInvoice(paymentData);

        const emailBody = `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                <h2 style="color: #4CAF50;">Your Invoice from Apollo Health Care</h2>
                <p>Dear ${patientName},</p>
                <p>Thank you for your recent appointment. Please find your invoice attached to this email.</p>
                <p><strong>Invoice Details:</strong></p>
                <ul>
                    <li><strong>Description:</strong> Appointment with ${doctorName}</li>
                    <li><strong>Amount:</strong> ${paymentData.amount} tk</li>
                    <li><strong>Date:</strong> ${appointmentDate}</li>
                    <li><strong>Time:</strong> ${appointmentTime}</li>
                </ul>
                <p>If you have any questions, feel free to reply to this email.</p>
                <p>Best regards,<br/>The Apollo Health Care Team</p>
                <hr style="margin-top: 30px;"/>
                <p style="font-size: 12px; color: #999;">This is an automated message. Please do not reply directly to this email.</p>
            </div>
        `;

        const subject = 'Your Invoice';

        sendEmail(patientEmail, subject, emailBody, pdfBuffer);
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
