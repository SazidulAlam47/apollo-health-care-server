import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DoctorScheduleServices } from './doctorSchedule.service';
import { CustomRequest } from '../../interfaces';

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

export const DoctorScheduleControllers = {
    createDoctorSchedule,
};
