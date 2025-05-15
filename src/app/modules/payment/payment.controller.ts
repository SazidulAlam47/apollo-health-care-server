import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PaymentServices } from './payment.service';

const initPayment = catchAsync(async (req, res) => {
    const result = await PaymentServices.initPayment(req.params.appointmentId);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Payment initiated successfully',
        data: result,
    });
    // res.redirect(result);
});

export const PaymentControllers = {
    initPayment,
};
