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
exports.DoctorScheduleControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const doctorSchedule_service_1 = require("./doctorSchedule.service");
const pick_1 = __importDefault(require("../../utils/pick"));
const constants_1 = require("../../constants");
const doctorSchedule_constant_1 = require("./doctorSchedule.constant");
const createDoctorSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = req;
    const result = yield doctorSchedule_service_1.DoctorScheduleServices.createDoctorSchedule(req.body, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Doctor Schedule created successfully',
        data: result,
    });
}));
const getMySchedules = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, doctorSchedule_constant_1.myScheduleFilters);
    const query = (0, pick_1.default)(req.query, constants_1.queryFilters);
    const { user } = req;
    const result = yield doctorSchedule_service_1.DoctorScheduleServices.getMySchedules(filters, query, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'My Schedules are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const deleteMySchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = req;
    const { id } = req.params;
    const result = yield doctorSchedule_service_1.DoctorScheduleServices.deleteMySchedule(id, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'My Schedule deleted successfully',
        data: result,
    });
}));
const getAllDoctorSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, doctorSchedule_constant_1.allScheduleFilters);
    const query = (0, pick_1.default)(req.query, constants_1.queryFilters);
    const result = yield doctorSchedule_service_1.DoctorScheduleServices.getAllDoctorSchedule(filters, query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'All Doctor Schedule are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
exports.DoctorScheduleControllers = {
    createDoctorSchedule,
    getMySchedules,
    deleteMySchedule,
    getAllDoctorSchedule,
};
