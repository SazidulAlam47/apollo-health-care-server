import { TDoctorScheduleFilterKeys } from './doctorSchedule.interface';

export const myScheduleFilters: TDoctorScheduleFilterKeys[] = [
    'isBooked',
    'startDateTime',
    'endDateTime',
];

export const allScheduleFilters: TDoctorScheduleFilterKeys[] = [
    'isBooked',
    'startDateTime',
    'endDateTime',
    'doctorId',
];
