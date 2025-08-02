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
exports.PaymentControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const payment_service_1 = require("./payment.service");
const getBaseUrl_1 = __importDefault(require("../../utils/getBaseUrl"));
const config_1 = __importDefault(require("../../config"));
const initPayment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { appointmentId } = req.body;
    const baseUrl = (0, getBaseUrl_1.default)(req);
    const result = yield payment_service_1.PaymentServices.initPayment(appointmentId, baseUrl);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Payment initiated successfully',
        data: result,
    });
}));
const validatePayment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield payment_service_1.PaymentServices.validatePayment(req.body);
    res.redirect(`${config_1.default.client_url}/payment/success`);
}));
const paymentFailed = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield payment_service_1.PaymentServices.paymentFailed(req.body);
    res.redirect(`${config_1.default.client_url}/payment/failed`);
}));
const paymentCancelled = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield payment_service_1.PaymentServices.paymentCancelled(req.body);
    res.redirect(`${config_1.default.client_url}/payment/canceled`);
}));
exports.PaymentControllers = {
    initPayment,
    validatePayment,
    paymentFailed,
    paymentCancelled,
};
