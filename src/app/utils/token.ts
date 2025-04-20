/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import ms from 'ms';
import status from 'http-status';
import ApiError from '../errors/ApiError';

export const createToken = (
    jwtPayload: {
        email: string;
        role: string;
    },
    secret: Secret,
    expiresIn: ms.StringValue,
) => {
    const options: SignOptions = { algorithm: 'HS256', expiresIn };
    return jwt.sign(jwtPayload, secret, options);
};

export const verifyToken = (token: string, secret: Secret) => {
    try {
        return jwt.verify(token, secret) as JwtPayload;
    } catch (err) {
        throw new ApiError(status.UNAUTHORIZED, 'You are not authorized');
    }
};
