/* eslint-disable @typescript-eslint/no-explicit-any */
const buildSearchFilterConditions = (
    searchTerm: string | undefined,
    searchableFields: string[],
    filterData: Record<string, unknown>,
) => {
    const conditions: any[] = [
        {
            AND: Object.entries(filterData).map(([key, value]) => ({
                [key]: value,
            })),
        },
    ];

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

export default buildSearchFilterConditions;
