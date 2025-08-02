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
exports.SpecialtiesServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const sendImageToCloudinary_1 = __importDefault(require("../../utils/sendImageToCloudinary"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const deleteFile_1 = __importDefault(require("../../utils/deleteFile"));
const buildSearchFilterConditions_1 = require("../../utils/buildSearchFilterConditions");
const specialties_constant_1 = require("./specialties.constant");
const createSpecialtiesIntoDB = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    const isSpecialtiesExists = yield prisma_1.default.specialties.findUnique({
        where: { title: payload.title },
        select: { id: true },
    });
    if (isSpecialtiesExists) {
        (0, deleteFile_1.default)(file);
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Specialties is already Exists');
    }
    if (!file) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Please upload a Icon');
    }
    const cloudinaryName = payload.title + '-' + Date.now();
    payload.icon = yield (0, sendImageToCloudinary_1.default)(cloudinaryName, file.path);
    const result = yield prisma_1.default.specialties.create({
        data: payload,
    });
    return result;
});
const getAllSpecialtiesFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // pagination
    let page;
    let limit;
    let skip;
    if (query.page && query.limit) {
        page = Number(query.page);
        limit = Number(query.limit);
        skip = (page - 1) * limit;
    }
    else {
        page = 1;
        limit = undefined;
        skip = 0;
    }
    const andConditions = [];
    const searchCondition = (0, buildSearchFilterConditions_1.buildSearchConditions)(query.searchTerm, specialties_constant_1.specialtiesSearchableFields);
    if (searchCondition) {
        andConditions.push(searchCondition);
    }
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.specialties.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
    });
    const totalData = yield prisma_1.default.specialties.count({ where: whereCondition });
    const totalPage = limit ? Math.ceil(totalData / limit) : 1;
    const LimitResponse = limit || 'Infinity';
    return {
        data: result,
        meta: { page, limit: LimitResponse, totalData, totalPage },
    };
});
const deleteSpecialtiesByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.specialties.findUniqueOrThrow({
        where: { id },
        select: { id: true },
    });
    const result = yield prisma_1.default.specialties.delete({
        where: { id },
    });
    return result;
});
exports.SpecialtiesServices = {
    createSpecialtiesIntoDB,
    getAllSpecialtiesFromDB,
    deleteSpecialtiesByIdFromDB,
};
