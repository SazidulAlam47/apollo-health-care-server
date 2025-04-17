import { Request, Response } from 'express';
import { AdminServices } from './admin.service';
import { adminFilters } from './admin.constant';
import pick from '../../shared/pick';

const getAllAdmins = async (req: Request, res: Response) => {
    const filters = pick(req.query, adminFilters);
    const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder']);
    const result = await AdminServices.getAllAdminsFromDB(filters, options);
    res.status(200).json({
        success: true,
        message: 'All Admin fetched',
        meta: result.meta,
        data: result.result,
    });
};

export const AdminControllers = {
    getAllAdmins,
};
