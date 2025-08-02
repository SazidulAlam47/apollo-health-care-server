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
exports.DoctorServices = void 0;
const calculateOptions_1 = __importDefault(require("../../utils/calculateOptions"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const buildSearchFilterConditions_1 = __importDefault(require("../../utils/buildSearchFilterConditions"));
const doctor_constant_1 = require("./doctor.constant");
const getAllDoctorsFromDB = (filters, query) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } = (0, calculateOptions_1.default)(query);
    const { specialties } = filters, filterData = __rest(filters, ["specialties"]);
    const andConditions = [];
    if (specialties && (specialties === null || specialties === void 0 ? void 0 : specialties.length)) {
        andConditions.push({
            doctorSpecialties: {
                some: {
                    specialties: {
                        title: {
                            equals: specialties,
                            mode: 'insensitive',
                        },
                    },
                },
            },
        });
    }
    const searchFilterConditions = (0, buildSearchFilterConditions_1.default)(searchTerm, doctor_constant_1.doctorSearchableFields, filterData);
    andConditions.push(...searchFilterConditions);
    andConditions.push({
        isDeleted: false,
    });
    // check the condition
    // console.dir(andConditions, { depth: Infinity });
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.doctor.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            doctorSpecialties: {
                include: {
                    specialties: true,
                },
            },
        },
    });
    const totalData = yield prisma_1.default.doctor.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
const getDoctorByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.doctor.findUniqueOrThrow({
        where: { id, isDeleted: false },
        include: {
            doctorSpecialties: {
                include: {
                    specialties: true,
                },
            },
        },
    });
    return result;
});
const deleteDoctorByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.doctor.findUniqueOrThrow({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const doctorDeletedData = yield tx.doctor.update({
            where: { id },
            data: { isDeleted: true },
        });
        yield tx.user.update({
            where: { email: doctorDeletedData.email },
            data: { status: 'DELETED' },
        });
        return doctorDeletedData;
    }));
    return result;
});
const updateDoctorByIdIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { specialties } = payload, doctorData = __rest(payload, ["specialties"]);
    const doctor = yield prisma_1.default.doctor.findUniqueOrThrow({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        if (specialties && (specialties === null || specialties === void 0 ? void 0 : specialties.length)) {
            // remove Specialties
            const removeSpecialties = specialties === null || specialties === void 0 ? void 0 : specialties.filter((specialty) => specialty.isDeleted === true);
            if (removeSpecialties === null || removeSpecialties === void 0 ? void 0 : removeSpecialties.length) {
                for (const removeSpecialty of removeSpecialties) {
                    yield tx.doctorSpecialties.deleteMany({
                        where: {
                            specialitiesId: removeSpecialty.specialtiesId,
                            doctorId: doctor.id,
                        },
                    });
                }
            }
            // add Specialties
            const addSpecialties = specialties === null || specialties === void 0 ? void 0 : specialties.filter((specialty) => specialty.isDeleted === false);
            if (addSpecialties === null || addSpecialties === void 0 ? void 0 : addSpecialties.length) {
                for (const addSpecialty of addSpecialties) {
                    // check before adding
                    const isSpecialtyExists = yield tx.doctorSpecialties.findFirst({
                        where: {
                            doctorId: doctor.id,
                            specialitiesId: addSpecialty.specialtiesId,
                        },
                    });
                    // if exists then skip
                    if (isSpecialtyExists)
                        continue;
                    yield tx.doctorSpecialties.create({
                        data: {
                            doctorId: doctor.id,
                            specialitiesId: addSpecialty.specialtiesId,
                        },
                    });
                }
            }
        }
        const updatedDoctor = yield tx.doctor.update({
            where: { id },
            data: doctorData,
            include: {
                doctorSpecialties: {
                    include: {
                        specialties: true,
                    },
                },
            },
        });
        return updatedDoctor;
    }));
    return result;
});
exports.DoctorServices = {
    getAllDoctorsFromDB,
    getDoctorByIdFromDB,
    updateDoctorByIdIntoDB,
    deleteDoctorByIdFromDB,
};
