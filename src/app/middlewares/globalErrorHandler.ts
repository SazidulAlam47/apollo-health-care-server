/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import status from 'http-status';
import config from '../config';
import { ZodError } from 'zod';
import { TErrorResponse } from '../interfaces';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode: number = err?.statusCode || status.INTERNAL_SERVER_ERROR;
    let message: string = err?.message || 'Something went wrong';

    if (err instanceof ZodError) {
        statusCode = status.BAD_REQUEST;
        message = 'Validation Error';
    }

    res.status(statusCode).json({
        success: false,
        message: message,
        error: err,
        stack: config.NODE_ENV === 'development' ? err?.stack : undefined,
    });
};

export default globalErrorHandler;
