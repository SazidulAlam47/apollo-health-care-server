import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ScheduleServices } from './schedule.service';
import { queryFilters } from '../../constants';
import { scheduleFilters } from './schedule.constant';
import pick from '../../utils/pick';

const createSchedule = catchAsync(async (req, res) => {
    const result = await ScheduleServices.createScheduleIntoDB(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Schedule created successfully',
        data: result,
    });
});

const getAllSchedules = catchAsync(async (req, res) => {
    const filters = pick(req.query, scheduleFilters);
    const query = pick(req.query, queryFilters);
    const result = await ScheduleServices.getAllSchedulesFromDB(filters, query);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Schedules are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

export const ScheduleControllers = {
    getAllSchedules,
    createSchedule,
};
