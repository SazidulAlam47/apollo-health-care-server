import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MetaServices } from './meta.service';
import { CustomRequest } from '../../interfaces';

const getDashboardMetaData = catchAsync(async (req, res) => {
    const { user } = req as CustomRequest;
    const result = await MetaServices.getDashboardMetaData(user);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Dashboard meta data is fetched successfully',
        data: result,
    });
});

export const MetaControllers = {
    getDashboardMetaData,
};
