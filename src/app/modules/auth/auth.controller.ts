import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';
import catchAsync from '../../utils/catchAsync';
import config from '../../config';

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);

    const { refreshToken, accessToken, needPasswordChange } = result;

    res.cookie('refreshToken', refreshToken, {
        secure: config.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    sendResponse(res, {
        statusCode: status.OK,
        message: 'Logged in successfully',
        data: {
            accessToken,
            needPasswordChange,
        },
    });
});

const logoutUser = catchAsync(async (req, res) => {
    res.clearCookie('refreshToken');
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Logged out successfully',
        data: null,
    });
});

export const AuthControllers = {
    loginUser,
    logoutUser,
};
