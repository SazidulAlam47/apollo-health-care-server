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
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const token_1 = require("../utils/token");
const config_1 = __importDefault(require("../config"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const auth = (...requiredRoles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const tokenBearer = req.headers.authorization;
        if (!tokenBearer) {
            throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
        }
        const token = tokenBearer.split(' ')[1]; // Extract token after "Bearer"
        if (!token) {
            throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
        }
        // check the token is valid
        const decoded = (0, token_1.verifyToken)(token, config_1.default.jwt.access_token_secret);
        const { email, role } = decoded;
        const user = yield prisma_1.default.user.findUnique({
            where: { email, status: 'ACTIVE' },
        });
        if (!user) {
            throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
        }
        if (requiredRoles.length && !requiredRoles.includes(role)) {
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden access');
        }
        req.user = decoded;
        next();
    });
};
exports.default = auth;
