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
exports.SslServices = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const sslcommerz_lts_1 = __importDefault(require("sslcommerz-lts"));
const config_1 = __importDefault(require("../../config"));
const app_1 = require("../../../app");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const store_id = config_1.default.ssl.storeId;
const store_passwd = config_1.default.ssl.storePass;
const is_live = false; //true for live, false for sandbox
const sslcz = new sslcommerz_lts_1.default(store_id, store_passwd, is_live);
const initPayment = (payload, baseUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentBaseUrl = baseUrl + app_1.basePath + '/payments';
        const data = {
            total_amount: payload.total_amount,
            currency: 'BDT',
            tran_id: payload.tran_id,
            success_url: `${paymentBaseUrl}/success`,
            fail_url: `${paymentBaseUrl}/fail`,
            cancel_url: `${paymentBaseUrl}/cancel`,
            ipn_url: `${paymentBaseUrl}/ipn`,
            shipping_method: 'N/A',
            product_name: 'Appointment',
            product_category: 'Appointment',
            product_profile: 'general',
            cus_name: payload.cus_name,
            cus_email: payload.cus_email,
            cus_add1: payload.cus_add1 || 'N/A',
            cus_add2: 'N/A',
            cus_city: 'N/A',
            cus_state: 'N/A',
            cus_postcode: 'N/A',
            cus_country: 'Bangladesh',
            cus_phone: payload.cus_phone,
            cus_fax: 'N/A',
            ship_name: 'N/A',
            ship_add1: 'N/A',
            ship_add2: 'N/A',
            ship_city: 'N/A',
            ship_state: 'N/A',
            ship_postcode: 1100,
            ship_country: 'N/A',
        };
        const apiResponse = yield sslcz.init(data);
        return apiResponse;
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to initiate payment');
    }
});
const validatePayment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield sslcz.validate(payload);
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to validate payment');
    }
});
exports.SslServices = {
    initPayment,
    validatePayment,
};
