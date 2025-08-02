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
exports.AppointmentControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const appointment_service_1 = require("./appointment.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const constants_1 = require("../../constants");
const pick_1 = __importDefault(require("../../utils/pick"));
const appointment_constant_1 = require("./appointment.constant");
const createAppointment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = req;
    const result = yield appointment_service_1.AppointmentServices.createAppointment(req.body, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Appointment created successfully',
        data: result,
    });
}));
const getMyAppointments = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, appointment_constant_1.appointmentFilters);
    const query = (0, pick_1.default)(req.query, constants_1.queryFilters);
    const { user } = req;
    const result = yield appointment_service_1.AppointmentServices.getMyAppointments(filters, query, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'My Appointments fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getAllAppointments = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, appointment_constant_1.appointmentFilters);
    const query = (0, pick_1.default)(req.query, constants_1.queryFilters);
    const result = yield appointment_service_1.AppointmentServices.getAllAppointments(filters, query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'All Appointments fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const changeAppointmentStatus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status: appointmentStatus } = req.body;
    const { user } = req;
    const result = yield appointment_service_1.AppointmentServices.changeAppointmentStatus(id, appointmentStatus, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Appointment status changed successfully',
        data: result,
    });
}));
const verifyVideoCall = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { user } = req;
    const result = yield appointment_service_1.AppointmentServices.verifyVideoCall(id, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Appointment verified successfully',
        data: result,
    });
}));
exports.AppointmentControllers = {
    createAppointment,
    getMyAppointments,
    getAllAppointments,
    changeAppointmentStatus,
    verifyVideoCall,
};
