import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createAdmin = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.createAdminIntoDB(req.body);
        res.status(200).json({
            success: true,
            message: 'Admin created Successfully',
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.name || 'Something went wrong',
        });
    }
};

export const UserController = {
    createAdmin,
};
