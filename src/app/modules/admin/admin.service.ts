import { Prisma } from '../../../../generated/prisma';
import prisma from '../../shared/prisma';
import { adminSearchableFields } from './admin.constants';

const getAllAdminsFromDB = async (query: Record<string, unknown>) => {
    const { searchTerm, ...filterData } = query;
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
    });
    return result;
};

export const AdminServices = {
    getAllAdminsFromDB,
};
