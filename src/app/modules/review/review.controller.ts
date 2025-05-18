import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewServices } from './review.service';
import { CustomRequest } from '../../interfaces';

const createReview = catchAsync(async (req, res) => {
    const { user } = req as CustomRequest;
    const result = await ReviewServices.createReview(req.body, user);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Review created successfully',
        data: result,
    });
});

export const ReviewControllers = {
    createReview,
};
