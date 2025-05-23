import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import pick from '../../utils/pick';
import { userFilters } from './user.constant';
import { queryFilters } from '../../constants';
import { CustomRequest } from '../../interfaces';

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

const changeProfileStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { status: userStatus } = req.body;
    const result = await UserServices.changeProfileStatusIntoDB(id, userStatus);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Status updated Successfully',
        data: result,
    });
});

const getMyProfile = catchAsync(async (req, res) => {
    const userData = (req as CustomRequest).user;
    const result = await UserServices.getMyProfileFromDB(userData);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Profile fetched Successfully',
        data: result,
    });
});

const updateMyProfile = catchAsync(async (req, res) => {
    const userData = (req as CustomRequest).user;
    const result = await UserServices.updateMyProfileIntoDB(
        userData,
        req.body,
        req.file,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Profile updated Successfully',
        data: result,
    });
});

export const UserControllers = {
    createAdmin,
    createDoctor,
    createPatient,
    getAllUsers,
    changeProfileStatus,
    getMyProfile,
    updateMyProfile,
};
