import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SpecialtiesServices } from './specialties.service';

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

export const SpecialtiesControllers = {
    createSpecialties,
};
