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
exports.ScheduleControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const schedule_service_1 = require("./schedule.service");
const constants_1 = require("../../constants");
const schedule_constant_1 = require("./schedule.constant");
const pick_1 = __importDefault(require("../../utils/pick"));
const createSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schedule_service_1.ScheduleServices.createScheduleIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        message: `${result.length} Schedules created successfully`,
        data: result,
    });
}));
const getAllSchedules = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, schedule_constant_1.scheduleFilters);
    const query = (0, pick_1.default)(req.query, constants_1.queryFilters);
    const { user } = req;
    const result = yield schedule_service_1.ScheduleServices.getAllSchedulesFromDB(filters, query, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Schedules are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getScheduleById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield schedule_service_1.ScheduleServices.getScheduleByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Schedule created successfully',
        data: result,
    });
}));
const deleteScheduleById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield schedule_service_1.ScheduleServices.deleteScheduleByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Schedule deleted successfully',
        data: result,
    });
}));
exports.ScheduleControllers = {
    getAllSchedules,
    createSchedule,
    getScheduleById,
    deleteScheduleById,
};
