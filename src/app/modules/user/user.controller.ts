import { Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createAdmin = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.createAdminIntoDB(req.body);
        sendResponse(res, {
            statusCode: status.CREATED,
            message: 'Admin created Successfully',
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.name || 'Something went wrong',
            error: err,
        });
    }
};

export const UserController = {
    createAdmin,
};
