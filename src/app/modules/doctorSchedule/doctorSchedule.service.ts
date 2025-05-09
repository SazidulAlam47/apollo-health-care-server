import status from 'http-status';
import ApiError from '../../errors/ApiError';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import prisma from '../../utils/prisma';
import { TCreateDoctorSchedulePayload } from './doctorSchedule.interface';
import { TQueryParams } from '../../interfaces';
import calculateOptions from '../../utils/calculateOptions';
import { Prisma } from '../../../../generated/prisma';

const createDoctorSchedule = async (
    payload: TCreateDoctorSchedulePayload,
    decodedUser: TDecodedUser,
) => {
    const doctor = await prisma.doctor.findUnique({
        where: { email: decodedUser.email },
        select: { id: true },
    });
    if (!doctor) {
        throw new ApiError(status.NOT_FOUND, 'Doctor not found');
    }

    const doctorSchedules = payload.scheduleIds.map((scheduleId) => ({
        doctorId: doctor.id,
        scheduleId,
    }));

    const result = await prisma.doctorSchedules.createMany({
        data: doctorSchedules,
    });

    return result;
};

const getMySchedules = async (
    filterData: {
        startDateTime?: string;
        endDateTime?: string;
        isBooked?: string;
    },
    query: TQueryParams,
    decodedUser: TDecodedUser,
) => {
    const { page, limit, skip } = calculateOptions(query);
    const andConditions: Prisma.DoctorSchedulesWhereInput[] = [];

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
        } else if (filterData.isBooked === 'false') {
            andConditions.push({
                isBooked: false,
            });
        }
    }

    const whereCondition: Prisma.DoctorSchedulesWhereInput = {
        AND: andConditions,
    };

    // console.dir(andConditions, { depth: Infinity });

    const result = await prisma.doctorSchedules.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        include: {
            schedule: true,
        },
        orderBy: {
            schedule: {
                startDateTime: query.sortOrder === 'desc' ? 'desc' : 'asc',
            },
        },
    });

    const totalData = await prisma.doctorSchedules.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

const deleteMySchedule = async (
    scheduleId: string,
    decodedUser: TDecodedUser,
) => {
    const doctor = await prisma.doctor.findUniqueOrThrow({
        where: { email: decodedUser.email },
        select: { id: true },
    });

    const doctorSchedule = await prisma.doctorSchedules.findUnique({
        where: {
            doctorId_scheduleId: {
                scheduleId,
                doctorId: doctor.id,
            },
        },
    });
    if (!doctorSchedule) {
        throw new ApiError(status.NOT_FOUND, 'Doctor Schedule not found');
    }
    if (doctorSchedule.isBooked) {
        throw new ApiError(
            status.BAD_REQUEST,
            'Doctor Schedule is already booked',
        );
    }

    const result = await prisma.doctorSchedules.delete({
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
};

export const DoctorScheduleServices = {
    createDoctorSchedule,
    getMySchedules,
    deleteMySchedule,
};
