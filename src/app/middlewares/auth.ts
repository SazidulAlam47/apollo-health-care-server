import { NextFunction, Request, Response } from 'express';
import { TUserRole } from '../modules/user/user.interface';
import ApiError from '../errors/ApiError';
import status from 'http-status';
import { verifyToken } from '../utils/token';
import config from '../config';
import { Secret } from 'jsonwebtoken';
import prisma from '../utils/prisma';
import { UserStatus } from '../../../generated/prisma';
import { CustomRequest } from '../interfaces';

const auth = (...requiredRoles: TUserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const tokenBearer = req.headers.authorization;
        if (!tokenBearer) {
            throw new ApiError(status.UNAUTHORIZED, 'You are not authorized');
        }
        const token = tokenBearer.split(' ')[1]; // Extract token after "Bearer"
        if (!token) {
            throw new ApiError(status.UNAUTHORIZED, 'You are not authorized');
        }
        // check the token is valid
        const decoded = verifyToken(
            token,
            config.jwt.access_token_secret as Secret,
        );
        const { email, role } = decoded;

        const user = await prisma.user.findUnique({
            where: { email, status: UserStatus.ACTIVE },
        });
        if (!user) {
            throw new ApiError(status.UNAUTHORIZED, 'You are not authorized');
        }

        if (requiredRoles.length && !requiredRoles.includes(role)) {
            throw new ApiError(status.FORBIDDEN, 'Forbidden access');
        }
        (req as CustomRequest).user = decoded;
        next();
    };
};

export default auth;
