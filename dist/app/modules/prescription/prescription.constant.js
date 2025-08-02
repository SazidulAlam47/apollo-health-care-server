"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prescriptionSearchableFields = exports.prescriptionFilters = exports.prescriptionPatientSearchableFields = exports.prescriptionPatientFilters = void 0;
exports.prescriptionPatientFilters = ['doctorEmail'];
exports.prescriptionPatientSearchableFields = [
    { relation: 'doctor', field: 'email' },
    { relation: 'doctor', field: 'name' },
];
exports.prescriptionFilters = ['doctorEmail', 'patientEmail'];
exports.prescriptionSearchableFields = [
    { relation: 'patient', field: 'email' },
    { relation: 'patient', field: 'name' },
    { relation: 'doctor', field: 'email' },
    { relation: 'doctor', field: 'name' },
];
