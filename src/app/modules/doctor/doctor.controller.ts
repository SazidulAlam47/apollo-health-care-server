import { DoctorServices } from './doctor.service';
import { doctorFilters } from './doctor.constant';
import pick from '../../utils/pick';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { queryFilters } from '../../constants';

const getAllDoctors = catchAsync(async (req, res) => {
    const filters = pick(req.query, doctorFilters);
    const query = pick(req.query, queryFilters);
    const result = await DoctorServices.getAllDoctorsFromDB(filters, query);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'All Doctor are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

const getDoctorById = catchAsync(async (req, res) => {
    const result = await DoctorServices.getDoctorByIdFromDB(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Doctor is fetched successfully',
        data: result,
    });
});

const updateDoctorById = catchAsync(async (req, res) => {
    const result = await DoctorServices.updateDoctorByIdIntoDB(
        req.params.id,
        req.body,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Doctor is updated successfully',
        data: result,
    });
});

const deleteDoctorById = catchAsync(async (req, res) => {
    const result = await DoctorServices.deleteDoctorByIdFromDB(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Doctor is deleted successfully',
        data: result,
    });
});

export const DoctorControllers = {
    getAllDoctors,
    getDoctorById,
    updateDoctorById,
    deleteDoctorById,
};
