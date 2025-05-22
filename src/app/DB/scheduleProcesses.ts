/* eslint-disable no-console */
import cron from 'node-cron';
import { AppointmentServices } from '../modules/appointment/appointment.service';

const scheduleProcesses = () => {
    cron.schedule('* * * * *', () => {
        try {
            AppointmentServices.cancelUnpaidAppointments();
            AppointmentServices.getAppointmentsBefore30Minutes();
        } catch (err) {
            console.log(err);
        }
    });
};

export default scheduleProcesses;
