import prisma from '../../utils/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import { SslServices } from '../ssl/ssl.service';

const initPayment = async (appointmentId: string) => {
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

    const result = await SslServices.initPayment(data);

    console.log({ paymentUlr: result.GatewayPageURL });

    return { paymentUlr: result.GatewayPageURL };
};

export const PaymentServices = {
    initPayment,
};
