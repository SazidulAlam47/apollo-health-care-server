import { Request } from 'express';
import { TDecodedUser } from './jwt.interface';

export interface CustomRequest extends Request {
    user: TDecodedUser;
}
