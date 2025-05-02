import { addHours, addMinutes } from 'date-fns';
import { TCreateSchedule } from './schedule.interface';
import prisma from '../../utils/prisma';
import { Schedule } from '../../../../generated/prisma';

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

const getAllSchedulesFromDB = async () => {
    const result = await prisma.schedule.findMany();
    return result;
};

export const ScheduleServices = {
    createScheduleIntoDB,
    getAllSchedulesFromDB,
};
