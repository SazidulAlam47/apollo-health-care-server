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
exports.AdminServices = void 0;
const calculateOptions_1 = __importDefault(require("../../utils/calculateOptions"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const admin_constant_1 = require("./admin.constant");
const buildSearchFilterConditions_1 = __importDefault(require("../../utils/buildSearchFilterConditions"));
const getAllAdminsFromDB = (filterData, query) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } = (0, calculateOptions_1.default)(query);
    const andConditions = [];
    const searchFilterConditions = (0, buildSearchFilterConditions_1.default)(searchTerm, admin_constant_1.adminSearchableFields, filterData);
    andConditions.push(...searchFilterConditions);
    andConditions.push({
        isDeleted: false,
    });
    // check the condition
    // console.dir(andConditions, { depth: Infinity });
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.admin.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const totalData = yield prisma_1.default.admin.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
const getAdminByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.admin.findUniqueOrThrow({
        where: { id, isDeleted: false },
    });
    return result;
});
const updateAdminByIdIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.admin.findUniqueOrThrow({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    const result = yield prisma_1.default.admin.update({
        where: { id },
        data,
    });
    return result;
});
const deleteAdminByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.admin.findUniqueOrThrow({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const adminDeletedData = yield tx.admin.update({
            where: { id },
            data: { isDeleted: true },
        });
        yield tx.user.update({
            where: { email: adminDeletedData.email },
            data: { status: 'DELETED' },
        });
        return adminDeletedData;
    }));
    return result;
});
exports.AdminServices = {
    getAllAdminsFromDB,
    getAdminByIdFromDB,
    updateAdminByIdIntoDB,
    deleteAdminByIdFromDB,
};
