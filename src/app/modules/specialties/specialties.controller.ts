import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SpecialtiesServices } from './specialties.service';
import { queryFilters } from '../../constants';
import pick from '../../utils/pick';

const createSpecialties = catchAsync(async (req, res) => {
    const result = await SpecialtiesServices.createSpecialtiesIntoDB(
        req.body,
        req.file,
    );
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Specialties created successfully',
        data: result,
    });
});

const getAllSpecialties = catchAsync(async (req, res) => {
    const query = pick(req.query, queryFilters);
    const result = await SpecialtiesServices.getAllSpecialtiesFromDB(query);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'All Specialties are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

const deleteSpecialtiesById = catchAsync(async (req, res) => {
    const result = await SpecialtiesServices.deleteSpecialtiesByIdFromDB(
        req.params.id as string,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Specialties deleted successfully',
        data: result,
    });
});

export const SpecialtiesControllers = {
    createSpecialties,
    getAllSpecialties,
    deleteSpecialtiesById,
};
