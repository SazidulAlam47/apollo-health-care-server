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
exports.AppointmentServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const uuid_1 = require("uuid");
const calculateOptions_1 = __importDefault(require("../../utils/calculateOptions"));
const buildSearchFilterConditions_1 = require("../../utils/buildSearchFilterConditions");
const sendEmail_1 = __importDefault(require("../../utils/sendEmail"));
const convertDateTimeUtcLocal_1 = require("../../utils/convertDateTimeUtcLocal");
const pad_1 = __importDefault(require("../../utils/pad"));
const now = (0, convertDateTimeUtcLocal_1.convertDateTimeToLocal)(new Date());
const createAppointment = (payload, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const patient = yield prisma_1.default.patient.findUniqueOrThrow({
        where: { email: decodedUser.email },
        select: { id: true },
    });
    const doctor = yield prisma_1.default.doctor.findUniqueOrThrow({
        where: { id: payload.doctorId },
        select: { id: true, appointmentFee: true, name: true },
    });
    const schedule = yield prisma_1.default.schedule.findUniqueOrThrow({
        where: { id: payload.scheduleId },
        select: { id: true, startDateTime: true },
    });
    if (schedule.startDateTime < now) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Schedule can not be in past');
    }
    const doctorSchedule = yield prisma_1.default.doctorSchedules.findUniqueOrThrow({
        where: {
            doctorId_scheduleId: {
                doctorId: doctor.id,
                scheduleId: schedule.id,
            },
        },
    });
    // check the patient have another appointment at the same time
    const isPatientHaveAppointment = yield prisma_1.default.appointment.findFirst({
        where: {
            patientId: patient.id,
            scheduleId: schedule.id,
            status: {
                not: 'CANCELED',
            },
        },
    });
    if (isPatientHaveAppointment) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'You already have an appointment scheduled at that time');
    }
    // check the doctor have another appointment at the same time
    const isDoctorHaveAppointment = yield prisma_1.default.appointment.findFirst({
        where: {
            doctorId: doctor.id,
            scheduleId: schedule.id,
            status: {
                not: 'CANCELED',
            },
        },
    });
    if (isDoctorHaveAppointment || doctorSchedule.isBooked) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, `${doctor.name} is not available on this Schedule`);
    }
    const videoCallingId = (0, uuid_1.v4)();
    const transactionId = 'tnx-' + (0, uuid_1.v4)();
    const appointmentData = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const appointment = yield tx.appointment.create({
            data: {
                patientId: patient.id,
                doctorId: doctor.id,
                scheduleId: schedule.id,
                videoCallingId,
            },
        });
        yield tx.doctorSchedules.update({
            where: {
                doctorId_scheduleId: {
                    doctorId: payload.doctorId,
                    scheduleId: payload.scheduleId,
                },
            },
            data: {
                isBooked: true,
                appointmentId: appointment.id,
            },
        });
        yield tx.payment.create({
            data: {
                appointmentId: appointment.id,
                amount: doctor.appointmentFee,
                transactionId,
            },
        });
        return appointment;
    }));
    const result = yield prisma_1.default.appointment.findUnique({
        where: { id: appointmentData.id },
        include: {
            doctor: true,
            patient: true,
            schedule: true,
            payment: true,
        },
    });
    return result;
});
const getMyAppointments = (filters, query, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = (0, calculateOptions_1.default)(query);
    const andConditions = [];
    const filterConditions = (0, buildSearchFilterConditions_1.buildFilterConditions)(filters);
    if (filterConditions)
        andConditions.push(filterConditions);
    // user based filter
    if (decodedUser.role === 'PATIENT') {
        andConditions.push({
            patient: {
                email: decodedUser.email,
            },
        });
    }
    else if (decodedUser.role === 'DOCTOR') {
        andConditions.push({
            doctor: {
                email: decodedUser.email,
            },
        });
    }
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.appointment.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            doctor: decodedUser.role === 'PATIENT',
            patient: decodedUser.role === 'DOCTOR'
                ? {
                    include: {
                        medicalReport: true,
                        patientHealthData: true,
                    },
                }
                : false,
            schedule: true,
            payment: decodedUser.role === 'PATIENT',
        },
    });
    const totalData = yield prisma_1.default.appointment.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
const getAllAppointments = (filters, query) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = (0, calculateOptions_1.default)(query);
    const andConditions = [];
    const filterConditions = (0, buildSearchFilterConditions_1.buildFilterConditions)(filters);
    if (filterConditions)
        andConditions.push(filterConditions);
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.appointment.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            doctor: true,
            patient: true,
            schedule: true,
            payment: true,
        },
    });
    const totalData = yield prisma_1.default.appointment.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);
    return { data: result, meta: { page, limit, totalData, totalPage } };
});
const changeAppointmentStatus = (appointmentId, appointmentStatus, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield prisma_1.default.appointment.findUniqueOrThrow({
        where: { id: appointmentId },
        select: {
            id: true,
            status: true,
            paymentStatus: true,
            doctor: decodedUser.role === 'DOCTOR'
                ? {
                    select: {
                        email: true,
                    },
                }
                : false,
        },
    });
    // check doctor is updating his/her appointment
    if (decodedUser.role === 'DOCTOR' &&
        decodedUser.email !== appointment.doctor.email) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden Access');
    }
    // check if the appointment is already COMPLETED or CANCELED
    // or current and input status is same
    if (appointment.status === 'COMPLETED' ||
        appointment.status === 'CANCELED' ||
        appointment.status === appointmentStatus) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, `Appointment is already ${appointment.status}`);
    }
    // check if the appointment is PAID
    if (appointment.paymentStatus !== 'PAID') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Appointment is Unpaid');
    }
    // Directly SCHEDULED to COMPLETED is not allowed
    if (appointment.status === 'SCHEDULED' &&
        appointmentStatus === 'COMPLETED') {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Directly SCHEDULED to COMPLETED is not allowed');
    }
    // update in database
    const result = yield prisma_1.default.appointment.update({
        where: {
            id: appointment.id,
        },
        data: {
            status: appointmentStatus,
        },
    });
    return result;
});
const cancelUnpaidAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const minute = 30;
    const thirtyMinAgo = new Date(Date.now() - minute * 60 * 1000);
    const unpaidAppointments = yield prisma_1.default.appointment.findMany({
        where: {
            paymentStatus: 'UNPAID',
            createdAt: {
                lte: thirtyMinAgo,
            },
        },
        select: { id: true },
    });
    const appointmentIdsToCancel = unpaidAppointments.map((appointment) => appointment.id);
    yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.appointment.updateMany({
            where: {
                id: {
                    in: appointmentIdsToCancel,
                },
            },
            data: {
                status: 'CANCELED',
            },
        });
        yield tx.doctorSchedules.updateMany({
            where: {
                appointmentId: {
                    in: appointmentIdsToCancel,
                },
            },
            data: {
                isBooked: false,
                appointmentId: null,
            },
        });
    }));
});
const getAppointmentsBefore30Minutes = () => __awaiter(void 0, void 0, void 0, function* () {
    const minute = 30;
    const now = (0, convertDateTimeUtcLocal_1.convertDateTimeToLocal)(new Date());
    const thirtyMinFuture = (0, convertDateTimeUtcLocal_1.convertDateTimeToLocal)(new Date(Date.now() + minute * 60 * 1000));
    const appointmentsBefore30Minute = yield prisma_1.default.appointment.findMany({
        where: {
            status: 'SCHEDULED',
            paymentStatus: 'PAID',
            reminderSent: false,
            schedule: {
                startDateTime: {
                    lte: thirtyMinFuture,
                    gte: now,
                },
            },
        },
        include: {
            schedule: true,
            patient: true,
            doctor: true,
        },
    });
    // send email
    for (const appointment of appointmentsBefore30Minute) {
        const patientEmail = appointment.patient.email;
        const patientName = appointment.patient.name;
        const doctorName = appointment.doctor.name;
        const appointmentDateTime = new Date(appointment.schedule.startDateTime);
        const appointmentDate = `${appointmentDateTime.getUTCDate()}-${appointmentDateTime.getUTCMonth()}-${appointmentDateTime.getUTCFullYear()}`;
        const appointmentTime = `${appointmentDateTime.getUTCHours()}:${(0, pad_1.default)(appointmentDateTime.getUTCMinutes())}`;
        const emailBody = `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                <h2 style="color: #4CAF50;">Appointment Reminder from Apollo Health Care</h2>
                <p>Dear ${patientName},</p>
                <p>This is a reminder for your upcoming <strong>online consultation</strong> with <strong>Dr. ${doctorName}</strong> at <strong>Apollo Health Care</strong>.</p>
                
                <p><strong>Appointment Details:</strong></p>
                <ul>
                    <li><strong>Date:</strong> ${appointmentDate}</li>
                    <li><strong>Time:</strong> ${appointmentTime}</li>
                    <li><strong>Video Calling ID:</strong> ${appointment.videoCallingId}</li>
                </ul>
                
                <p>Please make sure to:</p>
                <ul>
                    <li>Join the meeting 5 minutes early.</li>
                    <li>Have a stable internet connection and a working camera/microphone.</li>
                    <li>Be in a quiet, private environment for your consultation.</li>
                </ul>

                <p>Looking forward to seeing you online!</p>

                <p>Best regards,<br/>The Apollo Health Care Team</p>
                
                <hr style="margin-top: 30px;" />
                <p style="font-size: 12px; color: #999;">This is an automated message. Please do not reply directly to this email.</p>
            </div>
        `;
        const subject = 'Reminder: Your Upcoming Online Consultation at Apollo Health Care';
        yield (0, sendEmail_1.default)(patientEmail, subject, emailBody);
        yield prisma_1.default.appointment.update({
            where: { id: appointment.id },
            data: {
                reminderSent: true,
            },
        });
    }
});
const verifyVideoCall = (videoCallingId, decodedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const andConditions = [];
    andConditions.push({
        videoCallingId,
        status: {
            in: ['SCHEDULED', 'IN_PROGRESS'],
        },
    });
    // user based filter
    if (decodedUser.role === 'PATIENT') {
        andConditions.push({
            patient: {
                email: decodedUser.email,
            },
        });
    }
    else if (decodedUser.role === 'DOCTOR') {
        andConditions.push({
            doctor: {
                email: decodedUser.email,
            },
        });
    }
    const whereCondition = { AND: andConditions };
    const result = yield prisma_1.default.appointment.findFirstOrThrow({
        where: whereCondition,
    });
    return result;
});
exports.AppointmentServices = {
    createAppointment,
    getMyAppointments,
    getAllAppointments,
    changeAppointmentStatus,
    cancelUnpaidAppointments,
    getAppointmentsBefore30Minutes,
    verifyVideoCall,
};
