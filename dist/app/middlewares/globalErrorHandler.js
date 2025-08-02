"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../config"));
const zod_1 = require("zod");
const prisma_1 = require("../../../generated/prisma");
const globalErrorHandler = (err, req, res, next) => {
    var _a;
    let statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || http_status_1.default.INTERNAL_SERVER_ERROR;
    let message = (err === null || err === void 0 ? void 0 : err.message) || 'Something went wrong';
    let error = err;
    if (err instanceof zod_1.ZodError ||
        err instanceof prisma_1.Prisma.PrismaClientValidationError) {
        statusCode = http_status_1.default.UNPROCESSABLE_ENTITY;
        message = 'Validation Error';
    }
    if (err instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            statusCode = http_status_1.default.CONFLICT;
            message = 'Duplicate Error';
            error = err.meta;
        }
        if (err.code === 'P2025') {
            statusCode = http_status_1.default.NOT_FOUND;
            message = `${((_a = err.meta) === null || _a === void 0 ? void 0 : _a.modelName) || 'Something is'} not found`;
            error = err.meta;
        }
        if (err.code === 'P2003') {
            statusCode = http_status_1.default.BAD_REQUEST;
            message = 'Cannot delete: related records exist.';
            error = err.meta;
        }
    }
    res.status(statusCode).json({
        success: false,
        message,
        error,
        stack: config_1.default.NODE_ENV === 'development' ? err === null || err === void 0 ? void 0 : err.stack : undefined,
    });
};
exports.default = globalErrorHandler;
