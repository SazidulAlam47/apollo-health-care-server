"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const node_cron_1 = __importDefault(require("node-cron"));
const appointment_service_1 = require("../modules/appointment/appointment.service");
const scheduleProcesses = () => {
    node_cron_1.default.schedule('* * * * *', () => {
        try {
            appointment_service_1.AppointmentServices.cancelUnpaidAppointments();
            appointment_service_1.AppointmentServices.getAppointmentsBefore30Minutes();
        }
        catch (err) {
            console.log(err);
        }
    });
};
exports.default = scheduleProcesses;
