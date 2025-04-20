import ms from 'ms';
import { UserStatus } from '../../../../generated/prisma';
import config from '../../config';
import { comparePassword } from '../../utils/bcrypt';
import prisma from '../../utils/prisma';
import { createToken } from '../../utils/token';

const loginUser = async (payload: { email: string; password: string }) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            NOT: {
                status: UserStatus.DELETED,
            },
        },
    });

    await comparePassword(payload.password, user.password);

    const jwtPayload = {
        email: user.email,
        role: user.role,
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt.access_token_secret as string,
        config.jwt.access_token_expires_in as ms.StringValue,
    );

    const refreshToken = createToken(
        jwtPayload,
        config.jwt.refresh_token_secret as string,
        config.jwt.refresh_token_expires_in as ms.StringValue,
    );

    return {
        accessToken,
        refreshToken,
        needPasswordChange: user.needPasswordChange,
    };
};

export const AuthServices = {
    loginUser,
};
