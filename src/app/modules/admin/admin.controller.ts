import { AdminServices } from './admin.service';
import { adminFilters } from './admin.constant';
import pick from '../../utils/pick';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { queryFilters } from '../../constants';

const getAllAdmins = catchAsync(async (req, res) => {
    const filters = pick(req.query, adminFilters);
    const query = pick(req.query, queryFilters);
    const result = await AdminServices.getAllAdminsFromDB(filters, query);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'All Admin are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

const getAdminById = catchAsync(async (req, res) => {
    const result = await AdminServices.getAdminByIdFromDB(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Admin is fetched successfully',
        data: result,
    });
});

const updateAdminById = catchAsync(async (req, res) => {
    const result = await AdminServices.updateAdminByIdIntoDB(
        req.params.id,
        req.body,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Admin is updated successfully',
        data: result,
    });
});

const deleteAdminById = catchAsync(async (req, res) => {
    const result = await AdminServices.deleteAdminByIdFromDB(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Admin is deleted successfully',
        data: result,
    });
});

export const AdminControllers = {
    getAllAdmins,
    getAdminById,
    updateAdminById,
    deleteAdminById,
};
