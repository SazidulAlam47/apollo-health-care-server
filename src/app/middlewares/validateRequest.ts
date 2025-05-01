import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodEffects } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject | ZodEffects<AnyZodObject>) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            req.body = await schema.parseAsync(req.body);
            next();
        },
    );
};

export default validateRequest;
