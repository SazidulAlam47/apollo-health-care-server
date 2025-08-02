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
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../config"));
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const sendEmail = (to, subject, html, pdfBuffer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: config_1.default.node_mailer.email,
                pass: config_1.default.node_mailer.password,
            },
        });
        yield transporter.sendMail({
            from: `"Apollo Health Care" <${config_1.default.node_mailer.email}>`,
            to,
            subject,
            html,
            attachments: pdfBuffer
                ? [
                    {
                        filename: 'invoice.pdf',
                        content: pdfBuffer,
                        contentType: 'application/pdf',
                    },
                ]
                : [],
        });
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Failed to send Email');
    }
});
exports.default = sendEmail;
