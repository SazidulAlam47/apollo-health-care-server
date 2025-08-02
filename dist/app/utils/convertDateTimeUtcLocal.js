"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDateTimeToLocal = exports.convertDateTimeToUTC = void 0;
const convertDateTimeToUTC = (date) => {
    const offset = date.getTimezoneOffset() * 60000;
    // console.log(date.getHours()); // converted to local time from DB
    // console.log(date.getUTCHours()); // original time from DB
    return new Date(date.getTime() + offset);
};
exports.convertDateTimeToUTC = convertDateTimeToUTC;
const convertDateTimeToLocal = (date) => {
    const offset = date.getTimezoneOffset() * 60000;
    // console.log(date.getHours()); // converted to local time from DB
    // console.log(date.getUTCHours()); // original time from DB
    return new Date(date.getTime() - offset);
};
exports.convertDateTimeToLocal = convertDateTimeToLocal;
