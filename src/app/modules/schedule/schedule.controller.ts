import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ScheduleServices } from './schedule.service';

const createSchedule = catchAsync(async (req, res) => {
    const result = await ScheduleServices.createScheduleIntoDB(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Schedule created successfully',
        data: result,
    });
});

const getAllSchedules = catchAsync(async (req, res) => {
    const result = null;
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Schedules are fetched successfully',
        data: result,
    });
});

export const ScheduleControllers = {
    getAllSchedules,
    createSchedule,
};
