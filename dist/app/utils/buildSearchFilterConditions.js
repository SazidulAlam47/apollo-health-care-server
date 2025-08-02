"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSearchConditions = exports.buildFilterConditions = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const buildSearchFilterConditions = (searchTerm, searchableFields, filterData) => {
    const conditions = [];
    // filter
    if (Object.keys(filterData).length) {
        conditions.push({
            AND: Object.entries(filterData).map(([key, value]) => ({
                [key]: value,
            })),
        });
    }
    // search
    if (searchTerm) {
        conditions.push({
            OR: searchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            })),
        });
    }
    return conditions;
};
const buildFilterConditions = (filterData) => {
    if (Object.keys(filterData).length) {
        return {
            AND: Object.entries(filterData).map(([key, value]) => ({
                [key]: value,
            })),
        };
    }
    return null;
};
exports.buildFilterConditions = buildFilterConditions;
const buildSearchConditions = (searchTerm, searchableFields) => {
    if (searchTerm) {
        return {
            OR: searchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            })),
        };
    }
    return null;
};
exports.buildSearchConditions = buildSearchConditions;
exports.default = buildSearchFilterConditions;
