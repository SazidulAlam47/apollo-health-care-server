import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodEffects, ZodTypeAny } from 'zod';
import catchAsync from '../utils/catchAsync';

type ZodSchema = AnyZodObject | ZodEffects<ZodTypeAny>;

const validateRequest = (schema: ZodSchema) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            req.body = await schema.parseAsync(req.body);
            next();
        },
    );
};

export default validateRequest;
