import { Prisma } from '../../../../generated/prisma';
import calculateOptions, { TOptions } from '../../../utils/calculateOptions';
import prisma from '../../shared/prisma';
import { adminSearchableFields } from './admin.constant';

const getAllAdminsFromDB = async (
    params: Record<string, unknown>,
    options: TOptions,
) => {
    const { page, limit, skip, sortBy, sortOrder } = calculateOptions(options);
    const { searchTerm, ...filterData } = params;
    const andConditions: Prisma.AdminWhereInput[] = [];

    if (searchTerm) {
        andConditions.push({
            OR: adminSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm as string,
                    mode: 'insensitive',
                },
            })),
        });
    }

    if (Object.keys(filterData).length) {
        andConditions.push({
            AND: Object.entries(filterData).map(([key, value]) => ({
                [key]: value,
            })),
        });
    }

    // check the condition
    // console.dir(andConditions, { depth: Infinity });

    const whereCondition: Prisma.AdminWhereInput = { AND: andConditions };

    const result = await prisma.admin.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });

    const meta = { page, limit };

    return { result, meta };
};

export const AdminServices = {
    getAllAdminsFromDB,
};
