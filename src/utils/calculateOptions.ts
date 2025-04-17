export type TOptions = {
    page?: string;
    limit?: string;
    sortBy?: string;
    sortOrder?: string;
};

const calculateOptions = (options: TOptions) => {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 10;
    const skip = (page - 1) * limit;

    const sortBy = options.sortBy || 'createdAt';
    const sortOrder = options.sortOrder || (options.sortBy ? 'asc' : 'desc');

    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder,
    };
};

export default calculateOptions;
