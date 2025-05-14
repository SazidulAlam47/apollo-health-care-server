import { Appointment } from '../../../../generated/prisma';
import { AppointmentValidations } from './appointment.validation';
import { z } from 'zod';

export type TCreateAppointmentPayload = z.infer<
    typeof AppointmentValidations.createAppointment
>;

export type TAppointmentFilterKeys = keyof Appointment;
