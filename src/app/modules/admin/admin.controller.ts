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
        message: 'All Admin are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
};

const getAdminById = async (req: Request, res: Response) => {
    const result = await AdminServices.getAdminByIdFromDB(req.params.id);
    res.status(200).json({
        success: true,
        message: 'Admin is fetched successfully',
        data: result,
    });
};

const updateAdminById = async (req: Request, res: Response) => {
    try {
        const result = await AdminServices.updateAdminByIdIntoDB(
            req.params.id,
            req.body,
        );
        res.status(200).json({
            success: true,
            message: 'Admin is updated successfully',
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

const deleteAdminById = async (req: Request, res: Response) => {
    try {
        const result = await AdminServices.deleteAdminByIdFromDB(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Admin is deleted successfully',
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

export const AdminControllers = {
    getAllAdmins,
    getAdminById,
    updateAdminById,
    deleteAdminById,
};
