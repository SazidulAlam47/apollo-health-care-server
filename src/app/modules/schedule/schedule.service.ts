import { TCreateSchedule } from './schedule.interface';

const createScheduleIntoDB = async (payload: TCreateSchedule) => {
    console.log(payload);
};

export const ScheduleServices = {
    createScheduleIntoDB,
};
