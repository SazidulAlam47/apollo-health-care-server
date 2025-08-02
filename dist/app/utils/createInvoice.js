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
const easyinvoice_1 = __importDefault(require("easyinvoice"));
const config_1 = __importDefault(require("../config"));
const buffer_1 = require("buffer");
const convertDateTimeUtcLocal_1 = require("./convertDateTimeUtcLocal");
const now = (0, convertDateTimeUtcLocal_1.convertDateTimeToLocal)(new Date());
const today = `${now.getUTCDate()}-${now.getUTCMonth() + 1}-${now.getUTCFullYear()}`;
const createInvoice = (paymentData) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        apiKey: config_1.default.easy_invoice_api_key,
        mode: config_1.default.NODE_ENV === 'development' ? 'development' : 'production',
        products: [
            {
                description: `Appointment with ${paymentData.appointment.doctor.name}`,
                price: paymentData.amount,
            },
        ],
        images: {
            logo: 'https://res.cloudinary.com/dvrqc1qdm/image/upload/v1748945585/health_care_logo_jihwdr.png',
        },
        sender: {
            company: 'Apollo Health Care',
            address: 'House-7, Road-21, Sector-11',
            zip: 'Uttara',
            city: 'Dhaka-1230',
            country: 'Bangladesh',
        },
        client: {
            company: paymentData.appointment.patient.name,
            address: paymentData.appointment.patient.address || 'N/A',
        },
        information: {
            date: today,
        },
        bottomNotice: 'This is an automated invoice.',
        settings: {
            currency: 'BDT',
        },
        translate: {
            products: 'Appointments',
        },
    };
    const result = yield easyinvoice_1.default.createInvoice(data);
    const pdfBuffer = buffer_1.Buffer.from(result.pdf, 'base64');
    return pdfBuffer;
});
exports.default = createInvoice;
