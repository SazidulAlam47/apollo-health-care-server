import { Response } from 'express';

type TMeta = {
    page: number;
    limit: number;
    totalData: number;
    totalPage: number;
};

type TData<T> = {
    statusCode: number;
    message: string;
    meta?: TMeta;
    data: T | null | undefined;
};

const sendResponse = <T>(res: Response, data: TData<T>) => {
    res.status(data.statusCode).json({
        success: true,
        message: data.message,
        meta: data.meta,
        data: data.data,
    });
};

export default sendResponse;
