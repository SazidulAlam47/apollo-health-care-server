import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PrescriptionServices } from './prescription.service';
import { CustomRequest } from '../../interfaces';
import { queryFilters } from '../../constants';
import pick from '../../utils/pick';
import {
    prescriptionFilters,
    prescriptionPatientFilters,
} from './prescription.constant';

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

const getPatientPrescriptions = catchAsync(async (req, res) => {
    const { user } = req as CustomRequest;
    const filters = pick(req.query, prescriptionPatientFilters);
    const query = pick(req.query, queryFilters);
    const result = await PrescriptionServices.getPatientPrescriptions(
        filters,
        query,
        user,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Prescription fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

const getAllPrescriptions = catchAsync(async (req, res) => {
    const filters = pick(req.query, prescriptionFilters);
    const query = pick(req.query, queryFilters);
    const result = await PrescriptionServices.getAllPrescriptions(
        filters,
        query,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Prescription fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

export const PrescriptionControllers = {
    createPrescription,
    getPatientPrescriptions,
    getAllPrescriptions,
};
