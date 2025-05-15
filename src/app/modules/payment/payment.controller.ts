import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PaymentServices } from './payment.service';
import getBaseUrl from '../../utils/getBaseUrl';
import config from '../../config';

const initPayment = catchAsync(async (req, res) => {
    const { appointmentId } = req.body;
    const baseUrl = getBaseUrl(req);
    const result = await PaymentServices.initPayment(appointmentId, baseUrl);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Payment initiated successfully',
        data: result,
    });
});

const validatePayment = catchAsync(async (req, res) => {
    await PaymentServices.validatePayment(req.body);
    res.redirect(`${config.client_url}/dashboard/payment-success`);
});

const paymentFailed = catchAsync(async (req, res) => {
    await PaymentServices.paymentFailed(req.body);
    res.redirect(`${config.client_url}/dashboard/payment-fail`);
});

const paymentCancelled = catchAsync(async (req, res) => {
    await PaymentServices.paymentCancelled(req.body);
    res.redirect(`${config.client_url}/dashboard/payment-cancel`);
});

export const PaymentControllers = {
    initPayment,
    validatePayment,
    paymentFailed,
    paymentCancelled,
};
