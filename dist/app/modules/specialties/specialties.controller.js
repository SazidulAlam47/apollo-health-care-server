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
exports.SpecialtiesControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const specialties_service_1 = require("./specialties.service");
const constants_1 = require("../../constants");
const pick_1 = __importDefault(require("../../utils/pick"));
const createSpecialties = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield specialties_service_1.SpecialtiesServices.createSpecialtiesIntoDB(req.body, req.file);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Specialties created successfully',
        data: result,
    });
}));
const getAllSpecialties = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = (0, pick_1.default)(req.query, constants_1.queryFilters);
    const result = yield specialties_service_1.SpecialtiesServices.getAllSpecialtiesFromDB(query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'All Specialties are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const deleteSpecialtiesById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield specialties_service_1.SpecialtiesServices.deleteSpecialtiesByIdFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Specialties deleted successfully',
        data: result,
    });
}));
exports.SpecialtiesControllers = {
    createSpecialties,
    getAllSpecialties,
    deleteSpecialtiesById,
};
