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
exports.ScheduleServices = void 0;
const date_fns_1 = require("date-fns");
const prisma_1 = __importDefault(require("../../utils/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const createScheduleIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const intervalMinutes = 30;
    const startDate = new Date(payload.startDate);
    const endDate = new Date(payload.endDate);
    const result = [];
    for (const currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
        const startDateTime = new Date((0, date_fns_1.addMinutes)((0, date_fns_1.addHours)(currentDate, Number(payload.startTime.split(':')[0])), Number(payload.startTime.split(':')[1])));
        const endDateTime = new Date((0, date_fns_1.addMinutes)((0, date_fns_1.addHours)(currentDate, Number(payload.endTime.split(':')[0])), Number(payload.endTime.split(':')[1])));
        for (const currentDateTime = startDateTime; currentDateTime < endDateTime; currentDateTime.setMinutes(currentDateTime.getMinutes() + intervalMinutes)) {
            const currentSchedule = {
                startDateTime: currentDateTime,
                endDateTime: (0, date_fns_1.addMinutes)(currentDateTime, intervalMinutes),
            };
            const isSlotExists = yield prisma_1.default.schedule.findFirst({
                where: currentSchedule,
            });
            if (isSlotExists)
                continue;
            const createdSchedule = yield prisma_1.default.schedule.create({
                data: currentSchedule,
            });
            result.push(createdSchedule);
        }
    }
    if (!result.length) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Schedules are already exists for the requested time range');
    }
    return result;
});
const getAllSchedulesFromDB = (filterData, query, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
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
    // sorting
    const sortBy = query.sortBy || 'startDateTime';
    const sortOrder = query.sortOrder === 'asc' ? 'asc' : 'desc';
    const andConditions = [];
    // filter with range
    if (filterData.startDateTime && filterData.endDateTime) {
        andConditions.push({
            startDateTime: {
                gte: filterData.startDateTime,
            },
            endDateTime: {
                lte: filterData.endDateTime,
            },
        });
    }
    // skip doctors already booked schedules
    const doctorSchedules = yield prisma_1.default.doctorSchedules.findMany({
        where: {
            doctor: {
                email: decodedUser.email,
            },
        },
        select: {
            scheduleId: true,
        },
    });
    const doctorScheduleIds = doctorSchedules.map((doctorSchedule) => doctorSchedule.scheduleId);
    if (doctorSchedules.length) {
        andConditions.push({
            id: { notIn: doctorScheduleIds },
        });
    }
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.schedule.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const totalData = yield prisma_1.default.schedule.count({
        where: whereCondition,
    });
    const totalPage = limit ? Math.ceil(totalData / limit) : 1;
    const LimitResponse = limit || 'Infinity';
    return {
        data: result,
        meta: { page, limit: LimitResponse, totalData, totalPage },
    };
});
const getScheduleByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.schedule.findUniqueOrThrow({
        where: { id },
    });
    return result;
});
const deleteScheduleByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.schedule.findUniqueOrThrow({
        where: { id },
        select: { id: true },
    });
    const result = yield prisma_1.default.schedule.delete({
        where: { id },
    });
    return result;
});
exports.ScheduleServices = {
    createScheduleIntoDB,
    getAllSchedulesFromDB,
    getScheduleByIdFromDB,
    deleteScheduleByIdFromDB,
};
