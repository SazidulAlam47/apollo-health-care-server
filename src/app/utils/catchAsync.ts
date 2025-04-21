import { NextFunction, Response } from 'express';
import { CustomRequest, CustomRequestHandler } from '../interfaces';

const catchAsync = (fn: CustomRequestHandler) => {
    return async (req: CustomRequest, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

export default catchAsync;
