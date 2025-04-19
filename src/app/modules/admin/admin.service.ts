import { Admin, Prisma, UserStatus } from '../../../../generated/prisma';
import calculateOptions, { TOptions } from '../../utils/calculateOptions';
import prisma from '../../utils/prisma';
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

    andConditions.push({
        isDeleted: false,
    });

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

    const totalData = await prisma.admin.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

const getAdminByIdFromDB = async (id: string) => {
    const result = await prisma.admin.findUnique({
        where: { id, isDeleted: false },
    });
    return result;
};

const updateAdminByIdIntoDB = async (id: string, data: Partial<Admin>) => {
    await prisma.admin.findUniqueOrThrow({
        where: { id, isDeleted: false },
    });
    const result = await prisma.admin.update({
        where: { id },
        data,
    });
    return result;
};

const deleteAdminByIdFromDB = async (id: string) => {
    await prisma.admin.findUniqueOrThrow({
        where: { id, isDeleted: false },
    });
    const result = await prisma.$transaction(async (tx) => {
        const adminDeletedData = await tx.admin.update({
            where: { id },
            data: { isDeleted: true },
        });

        await tx.user.update({
            where: { email: adminDeletedData.email },
            data: { status: UserStatus.DELETED },
        });

        return adminDeletedData;
    });
    return result;
};

export const AdminServices = {
    getAllAdminsFromDB,
    getAdminByIdFromDB,
    updateAdminByIdIntoDB,
    deleteAdminByIdFromDB,
};
