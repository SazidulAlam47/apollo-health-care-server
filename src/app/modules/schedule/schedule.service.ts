import { addHours, addMinutes } from 'date-fns';
import { TCreateSchedule } from './schedule.interface';
import prisma from '../../utils/prisma';
import { Prisma, Schedule } from '../../../../generated/prisma';
import { TQueryParams } from '../../interfaces';
import calculateOptions from '../../utils/calculateOptions';
import { TDecodedUser } from '../../interfaces/jwt.interface';

const createScheduleIntoDB = async (payload: TCreateSchedule) => {
    const intervalMinutes = 30;
    const startDate = new Date(payload.startDate);
    const endDate = new Date(payload.endDate);

    const result: Schedule[] = [];

    for (
        const currentDate = startDate;
        currentDate <= endDate;
        currentDate.setDate(currentDate.getDate() + 1)
    ) {
        const startDateTime = new Date(
            addMinutes(
                addHours(currentDate, Number(payload.startTime.split(':')[0])),
                Number(payload.startTime.split(':')[1]),
            ),
        );

        const endDateTime = new Date(
            addMinutes(
                addHours(currentDate, Number(payload.endTime.split(':')[0])),
                Number(payload.endTime.split(':')[1]),
            ),
        );

        for (
            const currentDateTime = startDateTime;
            currentDateTime < endDateTime;
            currentDateTime.setMinutes(
                currentDateTime.getMinutes() + intervalMinutes,
            )
        ) {
            const currentSchedule = {
                startDateTime: currentDateTime,
                endDateTime: addMinutes(currentDateTime, intervalMinutes),
            };
            const isSlotExists = await prisma.schedule.findFirst({
                where: currentSchedule,
            });
            if (isSlotExists) continue;

            const createdSchedule = await prisma.schedule.create({
                data: currentSchedule,
            });

            result.push(createdSchedule);
        }
    }

    return result;
};

const getAllSchedulesFromDB = async (
    filterData: Partial<Pick<Schedule, 'startDateTime' | 'endDateTime'>>,
    query: TQueryParams,
    decodedUser: TDecodedUser,
) => {
    // default sort
    query.sortBy = query.sortBy || 'startDateTime';
    query.sortOrder = query.sortOrder || 'asc';

    const { page, limit, skip, sortBy, sortOrder } = calculateOptions(query);
    const andConditions: Prisma.ScheduleWhereInput[] = [];

    // filter with range
    if (filterData.startDateTime && filterData.endDateTime) {
        andConditions.push({
            AND: {
                startDateTime: {
                    gte: filterData.startDateTime,
                },
                endDateTime: {
                    lte: filterData.endDateTime,
                },
            },
        });
    }

    const doctorSchedules = await prisma.doctorSchedules.findMany({
        where: {
            doctor: {
                email: decodedUser.email,
            },
        },
        select: {
            scheduleId: true,
        },
    });

    const doctorScheduleIds = doctorSchedules.map(
        (doctorSchedule) => doctorSchedule.scheduleId,
    );

    if (doctorSchedules.length) {
        andConditions.push({
            id: { notIn: doctorScheduleIds },
        });
    }

    const whereCondition: Prisma.ScheduleWhereInput = { AND: andConditions };

    const result = await prisma.schedule.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });

    const totalData = await prisma.schedule.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

export const ScheduleServices = {
    createScheduleIntoDB,
    getAllSchedulesFromDB,
};
