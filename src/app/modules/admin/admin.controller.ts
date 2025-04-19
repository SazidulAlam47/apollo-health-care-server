import { Request, Response } from 'express';
import { AdminServices } from './admin.service';
import { adminFilters } from './admin.constant';
import pick from '../../utils/pick';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';

const getAllAdmins = async (req: Request, res: Response) => {
    const filters = pick(req.query, adminFilters);
    const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder']);
    const result = await AdminServices.getAllAdminsFromDB(filters, options);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'All Admin are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
};

const getAdminById = async (req: Request, res: Response) => {
    const result = await AdminServices.getAdminByIdFromDB(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
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
        sendResponse(res, {
            statusCode: status.OK,
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
        sendResponse(res, {
            statusCode: status.OK,
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
