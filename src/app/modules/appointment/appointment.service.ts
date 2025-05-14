import status from 'http-status';
import ApiError from '../../errors/ApiError';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import prisma from '../../utils/prisma';
import { TCreateAppointmentPayload } from './appointment.interface';
import { v4 as uuidv4 } from 'uuid';
import { Appointment, Prisma } from '../../../../generated/prisma';
import { TQueryParams } from '../../interfaces';
import calculateOptions from '../../utils/calculateOptions';
import { buildFilterConditions } from '../../utils/buildSearchFilterConditions';

const createAppointment = async (
    payload: TCreateAppointmentPayload,
    decodedUser: TDecodedUser,
) => {
    const patient = await prisma.patient.findUniqueOrThrow({
        where: { email: decodedUser.email },
        select: { id: true },
    });

    const doctor = await prisma.doctor.findUnique({
        where: { id: payload.doctorId },
        select: { id: true, appointmentFee: true },
    });
    if (!doctor) {
        throw new ApiError(status.NOT_FOUND, 'Doctor not found');
    }

    const schedule = await prisma.schedule.findUnique({
        where: { id: payload.scheduleId },
        select: { id: true },
    });
    if (!schedule) {
        throw new ApiError(status.NOT_FOUND, 'Schedule not found');
    }

    const isAppointmentExists = await prisma.appointment.findFirst({
        where: {
            patientId: patient.id,
            doctorId: doctor.id,
            scheduleId: schedule.id,
        },
    });
    if (isAppointmentExists) {
        throw new ApiError(status.CONFLICT, 'Appointment is already booked');
    }

    const doctorSchedule = await prisma.doctorSchedules.findUnique({
        where: {
            doctorId_scheduleId: {
                doctorId: doctor.id,
                scheduleId: schedule.id,
            },
        },
    });
    if (!doctorSchedule) {
        throw new ApiError(status.NOT_FOUND, 'Doctor-Schedule not found');
    }

    if (doctorSchedule.isBooked) {
        throw new ApiError(
            status.CONFLICT,
            'Doctor is not available on this Schedule',
        );
    }

    const videoCallingId = uuidv4();
    const transactionId = 'tnx-' + uuidv4();

    const appointmentData = await prisma.$transaction(async (tx) => {
        const appointment = await tx.appointment.create({
            data: {
                patientId: patient.id,
                doctorId: doctor.id,
                scheduleId: schedule.id,
                videoCallingId,
            },
        });

        await tx.doctorSchedules.update({
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

        await tx.payment.create({
            data: {
                appointmentId: appointment.id,
                amount: doctor.appointmentFee,
                transactionId,
            },
        });

        return appointment;
    });

    const result = await prisma.appointment.findUnique({
        where: { id: appointmentData.id },
        include: {
            doctor: true,
            patient: true,
            schedule: true,
            payment: true,
        },
    });

    return result;
};

const getMyAppointments = async (
    filters: Partial<Appointment>,
    query: TQueryParams,
    decodedUser: TDecodedUser,
) => {
    const { page, limit, skip, sortBy, sortOrder } = calculateOptions(query);

    const andConditions: Prisma.AppointmentWhereInput[] = [];

    const filterConditions = buildFilterConditions(filters);
    if (filterConditions) andConditions.push(filterConditions);

    // user based filter
    if (decodedUser.role === 'PATIENT') {
        andConditions.push({
            patient: {
                email: decodedUser.email,
            },
        });
    } else if (decodedUser.role === 'DOCTOR') {
        andConditions.push({
            doctor: {
                email: decodedUser.email,
            },
        });
    }

    const whereCondition: Prisma.AppointmentWhereInput = { AND: andConditions };

    const result = await prisma.appointment.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            doctor: decodedUser.role === 'PATIENT',
            patient:
                decodedUser.role === 'DOCTOR'
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

    const totalData = await prisma.appointment.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

const getAllAppointments = async (
    filters: Partial<Appointment>,
    query: TQueryParams,
) => {
    const { page, limit, skip, sortBy, sortOrder } = calculateOptions(query);

    const andConditions: Prisma.AppointmentWhereInput[] = [];

    const filterConditions = buildFilterConditions(filters);
    if (filterConditions) andConditions.push(filterConditions);

    const whereCondition: Prisma.AppointmentWhereInput = { AND: andConditions };

    const result = await prisma.appointment.findMany({
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

    const totalData = await prisma.appointment.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

export const AppointmentServices = {
    createAppointment,
    getMyAppointments,
    getAllAppointments,
};
