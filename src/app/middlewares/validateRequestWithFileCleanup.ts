import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import deleteFile from '../utils/deleteFile';
import ApiError from '../errors/ApiError';
import status from 'http-status';

const validateRequestWithFileCleanup = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req?.body?.data) {
                throw new ApiError(status.BAD_REQUEST, 'Data is not provided');
            }
            const data = JSON.parse(req.body.data);
            req.body = await schema.parseAsync(data);
            next();
        } catch (error) {
            deleteFile(req?.file);
            next(error);
        }
    };
};

export default validateRequestWithFileCleanup;
