import { AppointmentValidations } from './appointment.validation';
import { z } from 'zod';

export type TCreateAppointmentPayload = z.infer<
    typeof AppointmentValidations.createAppointment
>;
