"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewSearchableFields = exports.reviewFilters = void 0;
exports.reviewFilters = ['doctorEmail', 'patientEmail'];
exports.reviewSearchableFields = [
    { relation: 'patient', field: 'email' },
    { relation: 'patient', field: 'name' },
    { relation: 'doctor', field: 'email' },
    { relation: 'doctor', field: 'name' },
];
