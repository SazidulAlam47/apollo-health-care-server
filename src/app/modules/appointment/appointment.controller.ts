import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AppointmentServices } from './appointment.service';
import sendResponse from '../../utils/sendResponse';
import { CustomRequest } from '../../interfaces';
import { queryFilters } from '../../constants';
import pick from '../../utils/pick';
import { appointmentFilters } from './appointment.constant';

const createAppointment = catchAsync(async (req, res) => {
    const { user } = req as CustomRequest;
    const result = await AppointmentServices.createAppointment(req.body, user);
    sendResponse(res, {
        statusCode: status.CREATED,
        message: 'Appointment created successfully',
        data: result,
    });
});

const getMyAppointments = catchAsync(async (req, res) => {
    const filters = pick(req.query, appointmentFilters);
    const query = pick(req.query, queryFilters);
    const { user } = req as CustomRequest;
    const result = await AppointmentServices.getMyAppointments(
        filters,
        query,
        user,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'My Appointments fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

const getAllAppointments = catchAsync(async (req, res) => {
    const filters = pick(req.query, appointmentFilters);
    const query = pick(req.query, queryFilters);
    const result = await AppointmentServices.getAllAppointments(filters, query);
    sendResponse(res, {
        statusCode: status.OK,
        message: 'All Appointments fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});

const changeAppointmentStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { status: appointmentStatus } = req.body;
    const { user } = req as CustomRequest;
    const result = await AppointmentServices.changeAppointmentStatus(
        id,
        appointmentStatus,
        user,
    );
    sendResponse(res, {
        statusCode: status.OK,
        message: 'Appointment status changed successfully',
        data: result,
    });
});

export const AppointmentControllers = {
    createAppointment,
    getMyAppointments,
    getAllAppointments,
    changeAppointmentStatus,
};
