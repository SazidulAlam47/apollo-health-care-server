import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AppointmentServices } from './appointment.service';
import sendResponse from '../../utils/sendResponse';
import { CustomRequest } from '../../interfaces';

const createAppointment = catchAsync(async (req, res) => {
    const user = (req as CustomRequest).user;
    const result = await AppointmentServices.createAppointment(req.body, user);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Appointment created successfully',
        data: result,
    });
});

// const getAllAdmins = catchAsync(async (req, res) => {
//     const filters = pick(req.query, adminFilters);
//     const query = pick(req.query, queryFilters);
//     const result = await AdminServices.getAllAdminsFromDB(filters, query);
//     sendResponse(res, {
//         statusCode: status.OK,
//         message: 'All Admin are fetched successfully',
//         meta: result.meta,
//         data: result.data,
//     });
// });

export const AppointmentControllers = {
    createAppointment,
};
