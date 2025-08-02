"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const config_1 = __importDefault(require("../../config"));
const bcrypt_1 = require("../../utils/bcrypt");
const prisma_1 = __importDefault(require("../../utils/prisma"));
const token_1 = require("../../utils/token");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const sendEmail_1 = __importDefault(require("../../utils/sendEmail"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            email: payload.email,
            status: 'ACTIVE',
        },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'This email is not registered');
    }
    const isCorrectPassword = yield (0, bcrypt_1.comparePassword)(payload.password, user.password);
    if (!isCorrectPassword) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Incorrect Password');
    }
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    const accessToken = (0, token_1.createToken)(jwtPayload, config_1.default.jwt.access_token_secret, config_1.default.jwt.access_token_expires_in);
    const refreshToken = (0, token_1.createToken)(jwtPayload, config_1.default.jwt.refresh_token_secret, config_1.default.jwt.refresh_token_expires_in);
    return {
        accessToken,
        refreshToken,
        needPasswordChange: user.needPasswordChange,
        role: user.role,
    };
});
const refreshToken = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = (0, token_1.verifyToken)(refreshToken, config_1.default.jwt.refresh_token_secret);
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            email: decoded.email,
            status: 'ACTIVE',
        },
    });
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    const accessToken = (0, token_1.createToken)(jwtPayload, config_1.default.jwt.access_token_secret, config_1.default.jwt.access_token_expires_in);
    return { accessToken };
});
const changePassword = (decodedUser, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: { email: decodedUser.email, status: 'ACTIVE' },
    });
    const isCorrectPassword = yield (0, bcrypt_1.comparePassword)(payload.oldPassword, user.password);
    if (!isCorrectPassword) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Old password did not matched');
    }
    const newHashedPassword = yield (0, bcrypt_1.hashPassword)(payload.newPassword);
    yield prisma_1.default.user.update({
        where: {
            email: user.email,
        },
        data: {
            password: newHashedPassword,
            needPasswordChange: false,
        },
    });
    return null;
});
const forgotPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            email,
            status: 'ACTIVE',
        },
        include: {
            admin: true,
            doctor: true,
            patient: true,
        },
    });
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    const resetPasswordToken = (0, token_1.createToken)(jwtPayload, config_1.default.jwt.reset_pass_secret, config_1.default.jwt.reset_pass_token_expires_in);
    const resetPasswordLink = `${config_1.default.client_url}/reset-password?id=${user.id}&token=${resetPasswordToken}`;
    const name = ((_a = user === null || user === void 0 ? void 0 : user.admin) === null || _a === void 0 ? void 0 : _a.name) ||
        ((_b = user === null || user === void 0 ? void 0 : user.doctor) === null || _b === void 0 ? void 0 : _b.name) ||
        ((_c = user === null || user === void 0 ? void 0 : user.patient) === null || _c === void 0 ? void 0 : _c.name) ||
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
    try {
        yield (0, sendEmail_1.default)(user.email, subject, htmlBody);
    }
    catch (_d) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Failed to send password reset email');
    }
    return null;
});
const resetPassword = (tokenBearer, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tokenBearer) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden access');
    }
    const token = tokenBearer.split(' ')[1]; // Extract token after "Bearer"
    if (!token) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden access');
    }
    const decoded = (0, token_1.verifyToken)(token, config_1.default.jwt.reset_pass_secret);
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: { id: payload.id, status: 'ACTIVE' },
    });
    // check payload email and decoded email
    if (decoded.email !== user.email) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden access');
    }
    const hashedPassword = yield (0, bcrypt_1.hashPassword)(payload.password);
    yield prisma_1.default.user.update({
        where: {
            id: user.id,
        },
        data: {
            password: hashedPassword,
            needPasswordChange: false,
        },
    });
    return null;
});
exports.AuthServices = {
    loginUser,
    refreshToken,
    changePassword,
    forgotPassword,
    resetPassword,
};
