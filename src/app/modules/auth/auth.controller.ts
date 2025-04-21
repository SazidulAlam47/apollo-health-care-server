import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';
import catchAsync from '../../utils/catchAsync';
import config from '../../config';
import { CustomRequest } from '../../interfaces';

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

const refreshToken = catchAsync(async (req, res) => {
    const result = await AuthServices.refreshToken(req.cookies.refreshToken);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Access Token retrieved successfully',
        data: result,
    });
});

const changePassword = catchAsync(async (req, res) => {
    const user = (req as CustomRequest).user;
    const result = await AuthServices.changePassword(user, req.body);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Password changed successfully',
        data: result,
    });
});

const forgotPassword = catchAsync(async (req, res) => {
    const { email } = req.body;
    const result = await AuthServices.forgotPassword(email);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Password Reset Email send successfully',
        data: result,
    });
});

const resetPassword = catchAsync(async (req, res) => {
    const token = req.headers.authorization || '';
    const result = await AuthServices.resetPassword(token, req.body);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Password Reset successfully',
        data: result,
    });
});

export const AuthControllers = {
    loginUser,
    logoutUser,
    refreshToken,
    changePassword,
    forgotPassword,
    resetPassword,
};
