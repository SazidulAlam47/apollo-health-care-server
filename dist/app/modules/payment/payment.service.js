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
exports.PaymentServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const prisma_1 = __importDefault(require("../../utils/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const ssl_service_1 = require("../ssl/ssl.service");
const createInvoice_1 = __importDefault(require("../../utils/createInvoice"));
const sendEmail_1 = __importDefault(require("../../utils/sendEmail"));
const pad_1 = __importDefault(require("../../utils/pad"));
const convertDateTimeUtcLocal_1 = require("../../utils/convertDateTimeUtcLocal");
const now = (0, convertDateTimeUtcLocal_1.convertDateTimeToLocal)(new Date());
const initPayment = (appointmentId, baseUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentInfo = yield prisma_1.default.payment.findUniqueOrThrow({
        where: {
            appointmentId,
        },
        include: {
            appointment: {
                include: {
                    patient: true,
                    schedule: true,
                },
            },
        },
    });
    if (paymentInfo.status === 'PAID') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Appointment is already PAID');
    }
    if (paymentInfo.appointment.status !== 'SCHEDULED') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `Appointment is already ${paymentInfo.appointment.status}`);
    }
    if (paymentInfo.appointment.schedule.startDateTime < now) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Appointment can not be in past');
    }
    const data = {
        total_amount: paymentInfo.amount,
        tran_id: paymentInfo.transactionId,
        cus_name: paymentInfo.appointment.patient.name,
        cus_email: paymentInfo.appointment.patient.email,
        cus_add1: paymentInfo.appointment.patient.address,
        cus_phone: paymentInfo.appointment.patient.contactNumber,
    };
    const result = yield ssl_service_1.SslServices.initPayment(data, baseUrl);
    return { paymentUlr: result.GatewayPageURL };
});
const validatePayment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(payload === null || payload === void 0 ? void 0 : payload.val_id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Payment Failed');
    }
    const sslResponse = yield ssl_service_1.SslServices.validatePayment(payload);
    if (sslResponse.status !== 'VALID') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Payment Failed');
    }
    yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const paymentData = yield tx.payment.update({
            where: {
                transactionId: sslResponse.tran_id,
            },
            data: {
                status: 'PAID',
                paymentGatewayData: sslResponse,
            },
            include: {
                appointment: {
                    include: {
                        doctor: true,
                        patient: true,
                        schedule: true,
                    },
                },
            },
        });
        yield tx.appointment.update({
            where: {
                id: paymentData.appointmentId,
            },
            data: {
                paymentStatus: 'PAID',
            },
        });
        // send invoice email
        const patientEmail = paymentData.appointment.patient.email;
        const patientName = paymentData.appointment.patient.name;
        const doctorName = paymentData.appointment.doctor.name;
        const appointmentDate = `${paymentData.appointment.schedule.startDateTime.getUTCDate()}-${paymentData.appointment.schedule.startDateTime.getUTCMonth()}-${paymentData.appointment.schedule.startDateTime.getUTCFullYear()}`;
        const appointmentTime = `${paymentData.appointment.schedule.startDateTime.getUTCHours()}:${(0, pad_1.default)(paymentData.appointment.schedule.startDateTime.getUTCMinutes())}`;
        // const appointmentDate =
        const pdfBuffer = yield (0, createInvoice_1.default)(paymentData);
        const emailBody = `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                <h2 style="color: #4CAF50;">Your Invoice from Apollo Health Care</h2>
                <p>Dear ${patientName},</p>
                <p>Thank you for your recent appointment. Please find your invoice attached to this email.</p>
                <p><strong>Invoice Details:</strong></p>
                <ul>
                    <li><strong>Description:</strong> Appointment with ${doctorName}</li>
                    <li><strong>Amount:</strong> ${paymentData.amount} tk</li>
                    <li><strong>Date:</strong> ${appointmentDate}</li>
                    <li><strong>Time:</strong> ${appointmentTime}</li>
                </ul>
                <p>If you have any questions, feel free to reply to this email.</p>
                <p>Best regards,<br/>The Apollo Health Care Team</p>
                <hr style="margin-top: 30px;"/>
                <p style="font-size: 12px; color: #999;">This is an automated message. Please do not reply directly to this email.</p>
            </div>
        `;
        const subject = 'Your Invoice';
        (0, sendEmail_1.default)(patientEmail, subject, emailBody, pdfBuffer);
    }));
});
const paymentFailed = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.status !== 'FAILED' || !(payload === null || payload === void 0 ? void 0 : payload.tran_id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid Request');
    }
    const paymentInfo = yield prisma_1.default.payment.findUniqueOrThrow({
        where: {
            transactionId: payload.tran_id,
        },
        select: { id: true, status: true },
    });
    if (paymentInfo.status === 'PAID') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Already Paid');
    }
    yield prisma_1.default.payment.update({
        where: { id: paymentInfo.id },
        data: {
            paymentGatewayData: payload,
        },
    });
});
const paymentCancelled = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.status !== 'CANCELLED' || !(payload === null || payload === void 0 ? void 0 : payload.tran_id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid Request');
    }
    const paymentInfo = yield prisma_1.default.payment.findUniqueOrThrow({
        where: {
            transactionId: payload.tran_id,
        },
        select: { id: true, status: true },
    });
    if (paymentInfo.status === 'PAID') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Already Paid');
    }
    yield prisma_1.default.payment.update({
        where: { id: paymentInfo.id },
        data: {
            paymentGatewayData: payload,
        },
    });
});
exports.PaymentServices = {
    initPayment,
    validatePayment,
    paymentFailed,
    paymentCancelled,
};
