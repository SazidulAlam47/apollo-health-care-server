import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import pick from '../../utils/pick';
import { userFilters } from './user.constant';
import { queryFilters } from '../../constants';

const createAdmin = catchAsync(async (req, res) => {
    const result = await UserServices.createAdminIntoDB(req.body, req.file);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Admin Account created Successfully',
        data: result,
    });
});

const createDoctor = catchAsync(async (req, res) => {
    const result = await UserServices.createDoctorIntoDB(req.body, req.file);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Doctor Account created Successfully',
        data: result,
    });
});

const createPatient = catchAsync(async (req, res) => {
    const result = await UserServices.createPatientIntoDB(req.body, req.file);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Patient Account created Successfully',
        data: result,
    });
});

const getAllUsers = catchAsync(async (req, res) => {
    const filters = pick(req.query, userFilters);
    const query = pick(req.query, queryFilters);
    const result = await UserServices.getAllUsersFromDB(filters, query);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'All Users are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

export const UserControllers = {
    createAdmin,
    createDoctor,
    createPatient,
    getAllUsers,
};
