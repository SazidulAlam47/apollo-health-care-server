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
exports.DoctorControllers = void 0;
const doctor_service_1 = require("./doctor.service");
const doctor_constant_1 = require("./doctor.constant");
const pick_1 = __importDefault(require("../../utils/pick"));
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const constants_1 = require("../../constants");
const getAllDoctors = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, doctor_constant_1.doctorFilters);
    const query = (0, pick_1.default)(req.query, constants_1.queryFilters);
    const result = yield doctor_service_1.DoctorServices.getAllDoctorsFromDB(filters, query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'All Doctor are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getDoctorById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield doctor_service_1.DoctorServices.getDoctorByIdFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Doctor is fetched successfully',
        data: result,
    });
}));
const deleteDoctorById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield doctor_service_1.DoctorServices.deleteDoctorByIdFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Doctor is deleted successfully',
        data: result,
    });
}));
const updateDoctorById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield doctor_service_1.DoctorServices.updateDoctorByIdIntoDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Doctor is updated successfully',
        data: result,
    });
}));
exports.DoctorControllers = {
    getAllDoctors,
    getDoctorById,
    updateDoctorById,
    deleteDoctorById,
};
