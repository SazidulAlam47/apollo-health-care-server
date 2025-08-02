"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBaseUrl = (req) => {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const apiBaseUrl = `${protocol}://${req.get('host')}`;
    return apiBaseUrl;
};
exports.default = getBaseUrl;
