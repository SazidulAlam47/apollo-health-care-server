import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PrescriptionServices } from './prescription.service';
import { CustomRequest } from '../../interfaces';

const createPrescription = catchAsync(async (req, res) => {
    const { user } = req as CustomRequest;
    const result = await PrescriptionServices.createPrescription(
        req.body,
        user,
    );
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Prescription created successfully',
        data: result,
    });
});

export const PrescriptionControllers = {
    createPrescription,
};
