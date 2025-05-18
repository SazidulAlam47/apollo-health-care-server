import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewServices } from './review.service';
import { CustomRequest } from '../../interfaces';
import pick from '../../utils/pick';
import { queryFilters } from '../../constants';
import { reviewFilters } from './review.constant';

const createReview = catchAsync(async (req, res) => {
    const { user } = req as CustomRequest;
    const result = await ReviewServices.createReview(req.body, user);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Review created successfully',
        data: result,
    });
});

const getAllReviews = catchAsync(async (req, res) => {
    const filters = pick(req.query, reviewFilters);
    const query = pick(req.query, queryFilters);
    const result = await ReviewServices.getAllReviews(filters, query);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'All Doctor are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

export const ReviewControllers = {
    createReview,
    getAllReviews
};
