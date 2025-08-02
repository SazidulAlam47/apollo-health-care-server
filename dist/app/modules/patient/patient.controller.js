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
exports.PatientControllers = void 0;
const patient_service_1 = require("./patient.service");
const patient_constant_1 = require("./patient.constant");
const pick_1 = __importDefault(require("../../utils/pick"));
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const constants_1 = require("../../constants");
const getAllPatients = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, patient_constant_1.patientFilters);
    const query = (0, pick_1.default)(req.query, constants_1.queryFilters);
    const result = yield patient_service_1.PatientServices.getAllPatientsFromDB(filters, query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'All Patient are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getPatientById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield patient_service_1.PatientServices.getPatientByIdFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Patient is fetched successfully',
        data: result,
    });
}));
const deletePatientById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield patient_service_1.PatientServices.deletePatientByIdFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Patient is deleted successfully',
        data: result,
    });
}));
const updatePatientById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield patient_service_1.PatientServices.updatePatientByIdIntoDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Patient is updated successfully',
        data: result,
    });
}));
exports.PatientControllers = {
    getAllPatients,
    getPatientById,
    updatePatientById,
    deletePatientById,
};
