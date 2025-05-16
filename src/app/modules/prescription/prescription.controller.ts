import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PrescriptionServices } from './prescription.service';
import { CustomRequest } from '../../interfaces';
import { queryFilters } from '../../constants';
import pick from '../../utils/pick';

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

const patientPrescriptions = catchAsync(async (req, res) => {
    const { user } = req as CustomRequest;
    const query = pick(req.query, queryFilters);
    const result = await PrescriptionServices.patientPrescriptions(query, user);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Prescription fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

export const PrescriptionControllers = {
    createPrescription,
    patientPrescriptions,
};
