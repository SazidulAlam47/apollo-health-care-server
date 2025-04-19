import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createAdmin = catchAsync(async (req, res) => {
    const result = await UserServices.createAdminIntoDB(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Admin created Successfully',
        data: result,
    });
});

export const UserController = {
    createAdmin,
};
