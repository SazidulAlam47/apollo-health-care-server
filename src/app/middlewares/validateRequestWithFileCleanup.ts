import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import deleteFile from '../utils/deleteFile';

const validateRequestWithFileCleanup = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const data = JSON.parse(req.body.data);
        try {
            req.body = await schema.parseAsync(data);
            next();
        } catch (error) {
            deleteFile(req?.file);
            next(error);
        }
    };
};

export default validateRequestWithFileCleanup;
