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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientServices = void 0;
const calculateOptions_1 = __importDefault(require("../../utils/calculateOptions"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const patient_constant_1 = require("./patient.constant");
const buildSearchFilterConditions_1 = __importDefault(require("../../utils/buildSearchFilterConditions"));
const getAllPatientsFromDB = (filterData, query) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } = (0, calculateOptions_1.default)(query);
    const andConditions = [];
    const searchFilterConditions = (0, buildSearchFilterConditions_1.default)(searchTerm, patient_constant_1.patientSearchableFields, filterData);
    andConditions.push(...searchFilterConditions);
    andConditions.push({
        isDeleted: false,
    });
    // check the condition
    // console.dir(andConditions, { depth: Infinity });
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.patient.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            patientHealthData: true,
            medicalReport: true,
        },
    });
    const totalData = yield prisma_1.default.patient.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
const getPatientByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.patient.findUniqueOrThrow({
        where: { id, isDeleted: false },
        include: {
            patientHealthData: true,
            medicalReport: true,
        },
    });
    return result;
});
const deletePatientByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.patient.findUniqueOrThrow({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const patientDeletedData = yield tx.patient.update({
            where: { id },
            data: { isDeleted: true },
        });
        yield tx.user.update({
            where: { email: patientDeletedData.email },
            data: { status: 'DELETED' },
        });
        return patientDeletedData;
    }));
    return result;
});
const updatePatientByIdIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { patientHealthData, medicalReport } = payload, patientData = __rest(payload, ["patientHealthData", "medicalReport"]);
    const patient = yield prisma_1.default.patient.findUniqueOrThrow({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        // create or update health data
        if (patientHealthData) {
            yield tx.patientHealthData.upsert({
                where: { patientId: patient.id },
                update: patientHealthData,
                create: Object.assign(Object.assign({}, patientHealthData), { patientId: patient.id }),
            });
        }
        //add medical report
        if (medicalReport) {
            yield tx.medicalReport.create({
                data: Object.assign(Object.assign({}, medicalReport), { patientId: patient.id }),
            });
        }
        // update patient table
        return yield tx.patient.update({
            where: { id },
            data: patientData,
            include: {
                patientHealthData: true,
                medicalReport: true,
            },
        });
    }));
});
exports.PatientServices = {
    getAllPatientsFromDB,
    getPatientByIdFromDB,
    updatePatientByIdIntoDB,
    deletePatientByIdFromDB,
};
