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
exports.ReviewServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const calculateOptions_1 = __importDefault(require("../../utils/calculateOptions"));
const review_constant_1 = require("./review.constant");
const createReview = (payload, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const isReviewExists = yield prisma_1.default.review.findUnique({
        where: { appointmentId: payload.appointmentId },
        select: { id: true },
    });
    if (isReviewExists) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Already reviewed for this appointment');
    }
    const appointment = yield prisma_1.default.appointment.findUniqueOrThrow({
        where: { id: payload.appointmentId },
        select: {
            id: true,
            doctorId: true,
            patientId: true,
            status: true,
            patient: {
                select: { email: true },
            },
        },
    });
    if (appointment.patient.email !== decodedUser.email) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden access');
    }
    if (appointment.status !== 'COMPLETED') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Appointment is not completed yet');
    }
    return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield tx.review.create({
            data: {
                patientId: appointment.patientId,
                doctorId: appointment.doctorId,
                appointmentId: appointment.id,
                rating: payload.rating,
                comment: payload.comment,
            },
        });
        const avgRating = yield tx.review.aggregate({
            _avg: {
                rating: true,
            },
        });
        yield tx.doctor.update({
            where: { id: appointment.doctorId },
            data: {
                averageRating: avgRating._avg.rating || 0.0,
            },
        });
        return result;
    }));
});
const getAllReviews = (filters, query) => __awaiter(void 0, void 0, void 0, function* () {
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
            OR: review_constant_1.reviewSearchableFields.map(({ relation, field }) => ({
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
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.review.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            patient: true,
            doctor: true,
            appointment: true,
        },
    });
    const totalData = yield prisma_1.default.review.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
exports.ReviewServices = {
    createReview,
    getAllReviews,
};
