import { TQueryParams } from '../interfaces';

const calculateOptions = (options: TQueryParams) => {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 10;
    const skip = (page - 1) * limit;

    const sortBy = options.sortBy || 'createdAt';

    let sortOrder = options.sortBy ? 'asc' : 'desc';
    if (options.sortOrder === 'asc' || options.sortOrder === 'desc') {
        sortOrder = options.sortOrder;
    }

    const searchTerm = options.searchTerm;

    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder,
        searchTerm,
    };
};

export default calculateOptions;
