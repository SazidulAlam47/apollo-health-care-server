/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import status from 'http-status';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const statusCode: number = err?.statusCode || status.INTERNAL_SERVER_ERROR;
    const message: string = err?.name || 'Something went wrong';

    res.status(statusCode).json({
        success: false,
        message: message,
        error: err,
    });
};

export default globalErrorHandler;
