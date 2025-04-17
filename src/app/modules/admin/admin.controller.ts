import { Request, Response } from 'express';
import { AdminServices } from './admin.service';
import { adminFilters } from './admin.constants';
import pick from '../../shared/pick';

const getAllAdmins = async (req: Request, res: Response) => {
    const filters = pick(req.query, adminFilters);
    const result = await AdminServices.getAllAdminsFromDB(filters);
    res.status(200).json({
        success: true,
        message: 'All Admin fetched',
        data: result,
    });
};

export const AdminControllers = {
    getAllAdmins,
};
