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
exports.PrescriptionServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const calculateOptions_1 = __importDefault(require("../../utils/calculateOptions"));
const prescription_constant_1 = require("./prescription.constant");
const createPrescription = (payload, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield prisma_1.default.appointment.findUniqueOrThrow({
        where: { id: payload.appointmentId },
        select: {
            id: true,
            patientId: true,
            doctorId: true,
            status: true,
            doctor: {
                select: {
                    email: true,
                },
            },
        },
    });
    if (appointment.status !== 'COMPLETED') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Appointment is not COMPLETED');
    }
    if (appointment.doctor.email !== decodedUser.email) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden Access');
    }
    const isPrescriptionExists = yield prisma_1.default.prescription.findUnique({
        where: { appointmentId: appointment.id },
        select: { id: true },
    });
    if (isPrescriptionExists) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Prescription already exists for this Appointment');
    }
    const result = yield prisma_1.default.prescription.create({
        data: {
            appointmentId: appointment.id,
            doctorId: appointment.doctorId,
            patientId: appointment.patientId,
            instructions: payload.instructions,
            followUpDate: payload.followUpDate,
        },
        include: {
            patient: true,
        },
    });
    return result;
});
const getPatientPrescriptions = (filters, query, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } = (0, calculateOptions_1.default)(query);
    const andConditions = [];
    // only show patients own prescriptions
    andConditions.push({
        patient: {
            email: decodedUser.email,
        },
    });
    // filter doctor email
    if (filters === null || filters === void 0 ? void 0 : filters.doctorEmail) {
        andConditions.push({
            doctor: {
                email: filters.doctorEmail,
            },
        });
    }
    // search
    if (searchTerm) {
        andConditions.push({
            OR: prescription_constant_1.prescriptionPatientSearchableFields.map(({ relation, field }) => ({
                [relation]: {
                    [field]: {
                        contains: searchTerm,
                        mode: 'insensitive',
                    },
                },
            })),
        });
    }
    // console.dir(andConditions, { depth: Infinity });
    const whereCondition = {
        AND: andConditions,
    };
    const result = yield prisma_1.default.prescription.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            doctor: true,
            patient: true,
            appointment: true,
        },
    });
    const totalData = yield prisma_1.default.prescription.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
const getAllPrescriptions = (filters, query) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } = (0, calculateOptions_1.default)(query);
    const andConditions = [];
    // filter doctor email
    if (filters === null || filters === void 0 ? void 0 : filters.doctorEmail) {
        andConditions.push({
            doctor: {
                email: filters.doctorEmail,
            },
        });
    }
    // filter patient email
    if (filters === null || filters === void 0 ? void 0 : filters.patientEmail) {
        andConditions.push({
            patient: {
                email: filters.patientEmail,
            },
        });
    }
    // search
    if (searchTerm) {
        andConditions.push({
            OR: prescription_constant_1.prescriptionSearchableFields.map(({ relation, field }) => ({
                [relation]: {
                    [field]: {
                        contains: searchTerm,
                        mode: 'insensitive',
                    },
                },
            })),
        });
    }
    // console.dir(andConditions, { depth: Infinity });
    const whereCondition = {
        AND: andConditions,
    };
    const result = yield prisma_1.default.prescription.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            doctor: true,
            patient: true,
            appointment: true,
        },
    });
    const totalData = yield prisma_1.default.prescription.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
exports.PrescriptionServices = {
    createPrescription,
    getPatientPrescriptions,
    getAllPrescriptions,
};
