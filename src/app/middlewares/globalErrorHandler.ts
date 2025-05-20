/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import status from 'http-status';
import config from '../config';
import { ZodError } from 'zod';
import { Prisma } from '../../../generated/prisma';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode: number = err?.statusCode || status.INTERNAL_SERVER_ERROR;
    let message: string = err?.message || 'Something went wrong';
    let error = err;

    if (
        err instanceof ZodError ||
        err instanceof Prisma.PrismaClientValidationError
    ) {
        statusCode = status.UNPROCESSABLE_ENTITY;
        message = 'Validation Error';
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            statusCode = status.CONFLICT;
            message = 'Duplicate Error';
            error = err.meta;
        }
    }

    res.status(statusCode).json({
        success: false,
        message,
        error,
        stack: config.NODE_ENV === 'development' ? err?.stack : undefined,
    });
};

export default globalErrorHandler;
