export const reviewFilters = ['doctorEmail', 'patientEmail'];

export const reviewSearchableFields = [
    { relation: 'patient', field: 'email' },
    { relation: 'patient', field: 'name' },
    { relation: 'doctor', field: 'email' },
    { relation: 'doctor', field: 'name' },
];
