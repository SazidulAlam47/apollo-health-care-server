/* eslint-disable @typescript-eslint/no-explicit-any */
const buildSearchFilterConditions = (
    searchTerm: string | undefined,
    searchableFields: string[],
    filterData: Record<string, unknown>,
) => {
    const conditions: any[] = [];

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

export const buildFilterConditions = (filterData: Record<string, unknown>) => {
    if (Object.keys(filterData).length) {
        return {
            AND: Object.entries(filterData).map(([key, value]) => ({
                [key]: value,
            })),
        };
    }
    return null;
};

export const buildSearchConditions = (
    searchTerm: string | undefined,
    searchableFields: string[],
) => {
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

export default buildSearchFilterConditions;
