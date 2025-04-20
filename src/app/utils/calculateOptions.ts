import { TQueryParams } from '../../interfaces';

const calculateOptions = (options: TQueryParams) => {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 10;
    const skip = (page - 1) * limit;

    const sortBy = options.sortBy || 'createdAt';
    const sortOrder = options.sortOrder || (options.sortBy ? 'asc' : 'desc');

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
