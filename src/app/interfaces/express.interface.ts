/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { TDecodedUser } from './jwt.interface';

export interface CustomRequest extends Request {
    user: TDecodedUser;
}

export type CustomRequestHandler = (
    req: CustomRequest,
    res: Response,
    next: NextFunction,
) => Promise<void>;
