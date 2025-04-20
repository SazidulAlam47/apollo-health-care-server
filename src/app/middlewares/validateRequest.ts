import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const parsedData = await schema.parseAsync(req.body);
            req.body = parsedData;
            next();
        },
    );
};

export default validateRequest;
