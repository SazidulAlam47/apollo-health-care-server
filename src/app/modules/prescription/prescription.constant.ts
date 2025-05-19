export const prescriptionPatientFilters = ['doctorEmail'];

export const prescriptionPatientSearchableFields = [
    { relation: 'doctor', field: 'email' },
    { relation: 'doctor', field: 'name' },
];

export const prescriptionFilters = ['doctorEmail', 'patientEmail'];

export const prescriptionSearchableFields = [
    { relation: 'patient', field: 'email' },
    { relation: 'patient', field: 'name' },
    { relation: 'doctor', field: 'email' },
    { relation: 'doctor', field: 'name' },
];
