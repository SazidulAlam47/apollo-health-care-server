import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

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

export const UserController = {
    createAdmin,
    createDoctor,
};
