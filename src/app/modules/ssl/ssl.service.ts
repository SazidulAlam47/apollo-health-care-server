/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import SSLCommerzPayment from 'sslcommerz-lts';
import config from '../../config';
import { SSLCommerzInitPayload, SSLValidationPayload } from './ssl.interface';
import { basePath } from '../../../app';
import ApiError from '../../errors/ApiError';
import status from 'http-status';

const store_id = config.ssl.storeId;
const store_passwd = config.ssl.storePass;
const is_live = false; //true for live, false for sandbox

const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

const initPayment = async (
    payload: Partial<SSLCommerzInitPayload>,
    baseUrl: string,
) => {
    try {
        const paymentBaseUrl = baseUrl + basePath + '/payments';
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

        const apiResponse = await sslcz.init(data);

        return apiResponse;
    } catch (err) {
        throw new ApiError(status.BAD_REQUEST, 'Failed to initiate payment');
    }
};

const validatePayment = async (payload: SSLValidationPayload) => {
    try {
        return await sslcz.validate(payload);
    } catch (err) {
        throw new ApiError(status.BAD_REQUEST, 'Failed to validate payment');
    }
};

export const SslServices = {
    initPayment,
    validatePayment,
};
