import ms from 'ms';
import { UserStatus } from '../../../../generated/prisma';
import config from '../../config';
import { comparePassword } from '../../utils/bcrypt';
import prisma from '../../utils/prisma';
import { createToken, verifyToken } from '../../utils/token';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import { Secret } from 'jsonwebtoken';

const loginUser = async (payload: { email: string; password: string }) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email,
            status: UserStatus.ACTIVE,
        },
    });

    if (!user) {
        throw new ApiError(status.NOT_FOUND, 'User not found');
    }

    await comparePassword(payload.password, user.password);

    const jwtPayload = {
        email: user.email,
        role: user.role,
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt.access_token_secret as Secret,
        config.jwt.access_token_expires_in as ms.StringValue,
    );

    const refreshToken = createToken(
        jwtPayload,
        config.jwt.refresh_token_secret as Secret,
        config.jwt.refresh_token_expires_in as ms.StringValue,
    );

    return {
        accessToken,
        refreshToken,
        needPasswordChange: user.needPasswordChange,
    };
};

const refreshToken = async (refreshToken: string) => {
    const decoded = verifyToken(
        refreshToken,
        config.jwt.refresh_token_secret as Secret,
    );

    const user = await prisma.user.findUnique({
        where: {
            email: decoded.email,
            status: UserStatus.ACTIVE,
        },
    });

    if (!user) {
        throw new ApiError(status.NOT_FOUND, 'User not found');
    }

    const jwtPayload = {
        email: user.email,
        role: user.role,
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt.access_token_secret as Secret,
        config.jwt.access_token_expires_in as ms.StringValue,
    );

    return { accessToken };
};

export const AuthServices = {
    loginUser,
    refreshToken,
};
