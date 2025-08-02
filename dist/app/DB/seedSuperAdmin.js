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
/* eslint-disable no-console */
const config_1 = __importDefault(require("../config"));
const bcrypt_1 = require("../utils/bcrypt");
const prisma_1 = __importDefault(require("../utils/prisma"));
const seedSuperAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield (0, bcrypt_1.hashPassword)(config_1.default.super_admin_password);
        const isSuperAdminExists = yield prisma_1.default.user.findFirst({
            where: {
                role: 'SUPER_ADMIN',
            },
        });
        if (!isSuperAdminExists) {
            yield prisma_1.default.user.create({
                data: {
                    email: 'super@example.com',
                    password: hashedPassword,
                    role: 'SUPER_ADMIN',
                    needPasswordChange: false,
                    status: 'ACTIVE',
                },
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = seedSuperAdmin;
