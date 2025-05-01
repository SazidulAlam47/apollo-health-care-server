import { PatientServices } from './patient.service';
import { patientFilters } from './patient.constant';
import pick from '../../utils/pick';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { queryFilters } from '../../constants';

const getAllPatients = catchAsync(async (req, res) => {
    const filters = pick(req.query, patientFilters);
    const query = pick(req.query, queryFilters);
    const result = await PatientServices.getAllPatientsFromDB(filters, query);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'All Patient are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

const getPatientById = catchAsync(async (req, res) => {
    const result = await PatientServices.getPatientByIdFromDB(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Patient is fetched successfully',
        data: result,
    });
});

const deletePatientById = catchAsync(async (req, res) => {
    const result = await PatientServices.deletePatientByIdFromDB(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Patient is deleted successfully',
        data: result,
    });
});

const updatePatientById = catchAsync(async (req, res) => {
    const result = await PatientServices.updatePatientByIdIntoDB(
        req.params.id,
        req.body,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Patient is updated successfully',
        data: result,
    });
});

export const PatientControllers = {
    getAllPatients,
    getPatientById,
    updatePatientById,
    deletePatientById,
};
