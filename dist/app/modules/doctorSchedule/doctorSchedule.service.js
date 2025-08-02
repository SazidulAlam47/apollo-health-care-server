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
exports.DoctorScheduleServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const calculateOptions_1 = __importDefault(require("../../utils/calculateOptions"));
const convertDateTimeUtcLocal_1 = require("../../utils/convertDateTimeUtcLocal");
const now = (0, convertDateTimeUtcLocal_1.convertDateTimeToLocal)(new Date());
const createDoctorSchedule = (payload, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const doctor = yield prisma_1.default.doctor.findUniqueOrThrow({
        where: { email: decodedUser.email },
        select: { id: true },
    });
    for (const scheduleId of payload.scheduleIds) {
        const schedule = yield prisma_1.default.schedule.findUniqueOrThrow({
            where: { id: scheduleId },
            select: { id: true, startDateTime: true },
        });
        if (schedule.startDateTime < now) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Schedule can not be in past');
        }
    }
    const doctorSchedules = payload.scheduleIds.map((scheduleId) => ({
        doctorId: doctor.id,
        scheduleId,
    }));
    const result = yield prisma_1.default.doctorSchedules.createMany({
        data: doctorSchedules,
    });
    return result;
});
const getMySchedules = (filterData, query, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip } = (0, calculateOptions_1.default)(query);
    const andConditions = [];
    // filter only my schedules
    andConditions.push({
        doctor: {
            email: decodedUser.email,
        },
    });
    // filter with range
    if (filterData.startDateTime && filterData.endDateTime) {
        andConditions.push({
            schedule: {
                startDateTime: {
                    gte: filterData.startDateTime,
                },
                endDateTime: {
                    lte: filterData.endDateTime,
                },
            },
        });
    }
    // is booked
    if (filterData.isBooked) {
        if (filterData.isBooked === 'true') {
            andConditions.push({
                isBooked: true,
            });
        }
        else if (filterData.isBooked === 'false') {
            andConditions.push({
                isBooked: false,
            });
        }
    }
    const whereCondition = {
        AND: andConditions,
    };
    // console.dir(andConditions, { depth: Infinity });
    const result = yield prisma_1.default.doctorSchedules.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        include: {
            schedule: true,
            appointment: {
                include: {
                    patient: true,
                },
            },
        },
        orderBy: {
            schedule: {
                startDateTime: query.sortOrder === 'asc' ? 'asc' : 'desc',
            },
        },
    });
    const totalData = yield prisma_1.default.doctorSchedules.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
const deleteMySchedule = (scheduleId, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const doctor = yield prisma_1.default.doctor.findUniqueOrThrow({
        where: { email: decodedUser.email },
        select: { id: true },
    });
    const doctorSchedule = yield prisma_1.default.doctorSchedules.findUniqueOrThrow({
        where: {
            doctorId_scheduleId: {
                scheduleId,
                doctorId: doctor.id,
            },
        },
    });
    if (doctorSchedule.isBooked) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Doctor Schedule is already booked');
    }
    const result = yield prisma_1.default.doctorSchedules.delete({
        where: {
            doctorId_scheduleId: {
                scheduleId,
                doctorId: doctor.id,
            },
        },
        include: {
            schedule: true,
        },
    });
    return result;
});
const getAllDoctorSchedule = (filterData, query) => __awaiter(void 0, void 0, void 0, function* () {
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
    // filter with doctorId
    if (filterData.doctorId) {
        andConditions.push({
            doctorId: filterData.doctorId,
        });
    }
    // filter with range
    if (filterData.startDateTime && filterData.endDateTime) {
        andConditions.push({
            schedule: {
                startDateTime: {
                    gte: filterData.startDateTime,
                },
                endDateTime: {
                    lte: filterData.endDateTime,
                },
            },
        });
    }
    // is booked
    if (filterData.isBooked) {
        if (filterData.isBooked === 'true') {
            andConditions.push({
                isBooked: true,
            });
        }
        else if (filterData.isBooked === 'false') {
            andConditions.push({
                isBooked: false,
            });
        }
    }
    const whereCondition = {
        AND: andConditions,
    };
    // console.dir(andConditions, { depth: Infinity });
    const result = yield prisma_1.default.doctorSchedules.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        include: {
            schedule: true,
            doctor: true,
        },
        orderBy: {
            schedule: {
                startDateTime: query.sortOrder === 'desc' ? 'desc' : 'asc',
            },
        },
    });
    const totalData = yield prisma_1.default.doctorSchedules.count({
        where: whereCondition,
    });
    const totalPage = limit ? Math.ceil(totalData / limit) : 1;
    const LimitResponse = limit || 'Infinity';
    return {
        data: result,
        meta: { page, limit: LimitResponse, totalData, totalPage },
    };
});
exports.DoctorScheduleServices = {
    createDoctorSchedule,
    getMySchedules,
    deleteMySchedule,
    getAllDoctorSchedule,
};
