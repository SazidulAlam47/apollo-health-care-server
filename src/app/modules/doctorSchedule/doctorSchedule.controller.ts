import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DoctorScheduleServices } from './doctorSchedule.service';
import { CustomRequest } from '../../interfaces';
import pick from '../../utils/pick';
import { queryFilters } from '../../constants';
import { myScheduleFilters } from './doctorSchedule.constant';

const createDoctorSchedule = catchAsync(async (req, res) => {
    const user = (req as CustomRequest).user;
    const result = await DoctorScheduleServices.createDoctorSchedule(
        req.body,
        user,
    );
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Doctor Schedule created successfully',
        data: result,
    });
});

const getMySchedules = catchAsync(async (req, res) => {
    const filters = pick(req.query, myScheduleFilters);
    const query = pick(req.query, queryFilters);
    const user = (req as CustomRequest).user;
    const result = await DoctorScheduleServices.getMySchedules(
        filters,
        query,
        user,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'My Schedules are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

const deleteMySchedule = catchAsync(async (req, res) => {
    const user = (req as CustomRequest).user;
    const { id } = req.params;
    const result = await DoctorScheduleServices.deleteMySchedule(id, user);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'My Schedule deleted successfully',
        data: result,
    });
});

const getAllDoctorSchedule = catchAsync(async (req, res) => {
    const filters = pick(req.query, myScheduleFilters);
    const query = pick(req.query, queryFilters);
    const result = await DoctorScheduleServices.getAllDoctorSchedule(
        filters,
        query,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'All Doctor Schedule are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

export const DoctorScheduleControllers = {
    createDoctorSchedule,
    getMySchedules,
    deleteMySchedule,
    getAllDoctorSchedule,
};
