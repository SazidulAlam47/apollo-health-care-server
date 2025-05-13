import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ScheduleServices } from './schedule.service';
import { queryFilters } from '../../constants';
import { scheduleFilters } from './schedule.constant';
import pick from '../../utils/pick';
import { CustomRequest } from '../../interfaces';

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
    const user = (req as CustomRequest).user;
    const result = await ScheduleServices.getAllSchedulesFromDB(
        filters,
        query,
        user,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Schedules are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

const getScheduleById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ScheduleServices.getScheduleByIdFromDB(id);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Schedule created successfully',
        data: result,
    });
});

const deleteScheduleById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ScheduleServices.deleteScheduleByIdFromDB(id);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Schedule deleted successfully',
        data: result,
    });
});

export const ScheduleControllers = {
    getAllSchedules,
    createSchedule,
    getScheduleById,
    deleteScheduleById,
};
