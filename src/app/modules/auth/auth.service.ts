import ms from 'ms';
import { UserStatus } from '../../../../generated/prisma';
import config from '../../config';
import { comparePassword, hashPassword } from '../../utils/bcrypt';
import prisma from '../../utils/prisma';
import { createToken, verifyToken } from '../../utils/token';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import { Secret } from 'jsonwebtoken';
import { TDecodedUser } from '../../interfaces/jwt.interface';

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

    const isCorrectPassword = await comparePassword(
        payload.password,
        user.password,
    );

    if (!isCorrectPassword) {
        throw new ApiError(status.FORBIDDEN, 'Password did not matched');
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

const changePassword = async (
    decodedUser: TDecodedUser,
    payload: { oldPassword: string; newPassword: string },
) => {
    const user = await prisma.user.findUnique({
        where: { email: decodedUser.email, status: UserStatus.ACTIVE },
    });
    if (!user) {
        throw new ApiError(status.NOT_FOUND, 'User not Found');
    }

    const isCorrectPassword = await comparePassword(
        payload.oldPassword,
        user.password,
    );

    if (!isCorrectPassword) {
        throw new ApiError(status.FORBIDDEN, 'Old password did not matched');
    }

    const newHashedPassword = await hashPassword(payload.newPassword);

    await prisma.user.update({
        where: {
            email: user.email,
        },
        data: {
            password: newHashedPassword,
            needPasswordChange: false,
        },
    });

    return null;
};

export const AuthServices = {
    loginUser,
    refreshToken,
    changePassword,
};
