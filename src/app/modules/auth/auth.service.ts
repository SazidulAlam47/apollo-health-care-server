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
import sendEmail from '../../utils/sendEmail';

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

const forgotPassword = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
            status: UserStatus.ACTIVE,
        },
        include: {
            admin: true,
            doctor: true,
            patient: true,
        },
    });

    if (!user) {
        throw new ApiError(status.NOT_FOUND, 'User not found');
    }

    const jwtPayload = {
        email: user.email,
        role: user.role,
    };

    const resetPasswordToken = createToken(
        jwtPayload,
        config.jwt.reset_pass_secret as Secret,
        config.jwt.reset_pass_token_expires_in as ms.StringValue,
    );

    const resetPasswordLink = `${config.client_url}/reset-password?id=${user.id}&token=${resetPasswordToken}`;

    const name =
        user?.admin?.name ||
        user?.doctor?.name ||
        user?.patient?.name ||
        'User';
    const subject = 'Reset Password';
    const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="text-align: center; color: #333;">Password Reset Request</h2>
            <p>Hello ${name},</p>
            <p>You requested to reset your password. Click the button below to reset it:</p>
            <div style="text-align: center; margin: 20px 0;">
            <a href="${resetPasswordLink}" style="background-color: #007bff; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
            </div>
            <p>If you didn’t request this, you can safely ignore this email.</p>
            <p>Regards,</p>
            <p><strong>Apollo Health Care</strong></p>
        </div>
        `;

    await sendEmail(user.email, subject, htmlBody);

    return null;
};

const resetPassword = async (
    tokenBearer: string,
    payload: { id: string; password: string },
) => {
    if (!tokenBearer) {
        throw new ApiError(status.FORBIDDEN, 'Forbidden access');
    }
    const token = tokenBearer.split(' ')[1]; // Extract token after "Bearer"
    if (!token) {
        throw new ApiError(status.FORBIDDEN, 'Forbidden access');
    }

    const decoded = verifyToken(token, config.jwt.reset_pass_secret as Secret);

    const user = await prisma.user.findUnique({
        where: { id: payload.id, status: UserStatus.ACTIVE },
    });
    if (!user) {
        throw new ApiError(status.NOT_FOUND, 'User not found');
    }

    // check payload email and decoded email
    if (decoded.email !== user.email) {
        throw new ApiError(status.FORBIDDEN, 'Forbidden access');
    }

    const hashedPassword = await hashPassword(payload.password);

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            password: hashedPassword,
            needPasswordChange: false,
        },
    });

    return null;
};

export const AuthServices = {
    loginUser,
    refreshToken,
    changePassword,
    forgotPassword,
    resetPassword,
};
