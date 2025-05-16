import { Appointment } from '../../../../generated/prisma';
import { AppointmentValidations } from './appointment.validation';
import { z } from 'zod';

export type TCreateAppointmentPayload = z.infer<
    typeof AppointmentValidations.createAppointment
>;

export type TAppointmentFilterKeys = keyof Appointment;

type TChangeAppointmentStatusPayload = z.infer<
    typeof AppointmentValidations.changeAppointmentStatus
>;

export type TChangeAppointmentStatus =
    TChangeAppointmentStatusPayload['status'];
