import SSLCommerzPayment from 'sslcommerz-lts';
import config from '../../config';
import { SSLCommerzInitPayload } from './ssl.interface';

const store_id = config.ssl.storeId;
const store_passwd = config.ssl.storePass;
const is_live = false; //true for live, false for sandbox

const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

const initPayment = async (payload: Partial<SSLCommerzInitPayload>) => {
    const data = {
        total_amount: payload.total_amount,
        currency: 'BDT',
        tran_id: payload.tran_id,
        success_url: 'http://localhost:3030/success',
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'N/A',
        product_name: 'Appointment',
        product_category: 'Electronic',
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
        ship_postcode: 1000,
        ship_country: 'N/A',
    };

    const apiResponse = await sslcz.init(data);

    return apiResponse;
};

export const SslServices = {
    initPayment,
};
