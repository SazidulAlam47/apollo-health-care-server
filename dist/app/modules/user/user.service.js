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
exports.UserServices = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const bcrypt_1 = require("../../utils/bcrypt");
const sendImageToCloudinary_1 = __importDefault(require("../../utils/sendImageToCloudinary"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const deleteFile_1 = __importDefault(require("../../utils/deleteFile"));
const calculateOptions_1 = __importDefault(require("../../utils/calculateOptions"));
const buildSearchFilterConditions_1 = __importDefault(require("../../utils/buildSearchFilterConditions"));
const user_constant_1 = require("./user.constant");
const pick_1 = __importDefault(require("../../utils/pick"));
const createAdminIntoDB = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    const isEmailExists = yield prisma_1.default.admin.findUnique({
        where: { email: payload.admin.email },
        select: { id: true },
    });
    if (isEmailExists) {
        (0, deleteFile_1.default)(file);
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Email already used with another account');
    }
    const isContactNumberExists = yield prisma_1.default.admin.findUnique({
        where: { contactNumber: payload.admin.contactNumber },
        select: { id: true },
    });
    if (isContactNumberExists) {
        (0, deleteFile_1.default)(file);
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Contact Number already used with another account');
    }
    const hashedPassword = yield (0, bcrypt_1.hashPassword)(payload.password);
    const userData = {
        email: payload.admin.email,
        password: hashedPassword,
        role: 'ADMIN',
    };
    const adminData = Object.assign({}, payload.admin);
    if (file === null || file === void 0 ? void 0 : file.size) {
        const imgName = payload.admin.name + '-' + Date.now();
        adminData.profilePhoto = yield (0, sendImageToCloudinary_1.default)(imgName, file.path);
    }
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.user.create({
            data: userData,
        });
        const createAdminData = yield tx.admin.create({
            data: adminData,
        });
        return createAdminData;
    }));
    return result;
});
const createDoctorIntoDB = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    const isEmailExists = yield prisma_1.default.doctor.findUnique({
        where: { email: payload.doctor.email },
        select: { id: true },
    });
    if (isEmailExists) {
        (0, deleteFile_1.default)(file);
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Email already used with another account');
    }
    const isContactNumberExists = yield prisma_1.default.doctor.findUnique({
        where: { contactNumber: payload.doctor.contactNumber },
        select: { id: true },
    });
    if (isContactNumberExists) {
        (0, deleteFile_1.default)(file);
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Contact Number already used with another account');
    }
    const hashedPassword = yield (0, bcrypt_1.hashPassword)(payload.password);
    const userData = {
        email: payload.doctor.email,
        password: hashedPassword,
        role: 'DOCTOR',
    };
    const doctorData = Object.assign({}, payload.doctor);
    if (file === null || file === void 0 ? void 0 : file.size) {
        const imgName = payload.doctor.name + '-' + Date.now();
        doctorData.profilePhoto = yield (0, sendImageToCloudinary_1.default)(imgName, file.path);
    }
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.user.create({
            data: userData,
        });
        const createDoctorData = yield tx.doctor.create({
            data: doctorData,
        });
        return createDoctorData;
    }));
    return result;
});
const createPatientIntoDB = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    const isEmailExists = yield prisma_1.default.patient.findUnique({
        where: { email: payload.patient.email },
        select: { id: true },
    });
    if (isEmailExists) {
        (0, deleteFile_1.default)(file);
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Email already used with another account');
    }
    const isContactNumberExists = yield prisma_1.default.patient.findUnique({
        where: { contactNumber: payload.patient.contactNumber },
        select: { id: true },
    });
    if (isContactNumberExists) {
        (0, deleteFile_1.default)(file);
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Contact Number already used with another account');
    }
    const hashedPassword = yield (0, bcrypt_1.hashPassword)(payload.password);
    const userData = {
        email: payload.patient.email,
        password: hashedPassword,
        role: 'PATIENT',
        needPasswordChange: false,
    };
    const patientData = Object.assign({}, payload.patient);
    if (file === null || file === void 0 ? void 0 : file.size) {
        const imgName = payload.patient.name + '-' + Date.now();
        patientData.profilePhoto = yield (0, sendImageToCloudinary_1.default)(imgName, file.path);
    }
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.user.create({
            data: userData,
        });
        const createDoctorData = yield tx.patient.create({
            data: patientData,
        });
        return createDoctorData;
    }));
    return result;
});
const getAllUsersFromDB = (filterData, query) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } = (0, calculateOptions_1.default)(query);
    const andConditions = [];
    const searchFilterConditions = (0, buildSearchFilterConditions_1.default)(searchTerm, user_constant_1.userSearchableFields, filterData);
    andConditions.push(...searchFilterConditions);
    // check the condition
    // console.dir(andConditions, { depth: Infinity });
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.user.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        select: {
            id: true,
            email: true,
            role: true,
            needPasswordChange: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            admin: true,
            doctor: true,
            patient: true,
        },
    });
    const totalData = yield prisma_1.default.user.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
const changeProfileStatusIntoDB = (id, userStatus) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: { id },
        select: { id: true, status: true },
    });
    if (user.status === userStatus) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `User is already ${user.status}`);
    }
    const updatedUser = yield prisma_1.default.user.update({
        where: { id },
        data: { status: userStatus },
    });
    return updatedUser;
});
const getMyProfileFromDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: { email: userData.email, status: 'ACTIVE' },
        select: {
            id: true,
            email: true,
            role: true,
            needPasswordChange: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            admin: userData.role === 'ADMIN',
            doctor: userData.role === 'DOCTOR' && {
                include: {
                    doctorSpecialties: {
                        include: {
                            specialties: true,
                        },
                    },
                },
            },
            patient: userData.role === 'PATIENT',
        },
    });
    const { admin, doctor, patient } = user, userInfo = __rest(user, ["admin", "doctor", "patient"]);
    return Object.assign(Object.assign(Object.assign(Object.assign({}, userInfo), admin), doctor), patient);
});
const updateMyProfileIntoDB = (userData, payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: { email: userData.email, status: 'ACTIVE' },
    });
    if (!user) {
        (0, deleteFile_1.default)(file);
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    if (file) {
        const imgName = `${user.id}` + '-' + Date.now();
        payload.profilePhoto = yield (0, sendImageToCloudinary_1.default)(imgName, file.path);
    }
    let result;
    if (user.role == 'ADMIN') {
        const adminUpdate = (0, pick_1.default)(payload, [
            'name',
            'contactNumber',
            'profilePhoto',
        ]);
        result = yield prisma_1.default.admin.update({
            where: { email: user.email },
            data: adminUpdate,
        });
    }
    if (user.role == 'PATIENT') {
        const patientUpdate = (0, pick_1.default)(payload, [
            'name',
            'contactNumber',
            'address',
            'profilePhoto',
        ]);
        result = yield prisma_1.default.patient.update({
            where: { email: user.email },
            data: patientUpdate,
        });
    }
    if (user.role == 'DOCTOR') {
        const { specialties } = payload, doctorData = __rest(payload, ["specialties"]);
        const doctor = yield prisma_1.default.doctor.findUniqueOrThrow({
            where: { email: user.email, isDeleted: false },
            select: { id: true },
        });
        result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
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
                where: { id: doctor.id },
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
    }
    return result;
});
exports.UserServices = {
    createAdminIntoDB,
    createDoctorIntoDB,
    createPatientIntoDB,
    getAllUsersFromDB,
    changeProfileStatusIntoDB,
    getMyProfileFromDB,
    updateMyProfileIntoDB,
};
