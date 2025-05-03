import status from 'http-status';
import { Admin, Prisma } from '../../../../generated/prisma';
import { TQueryParams } from '../../interfaces';
import ApiError from '../../errors/ApiError';
import calculateOptions from '../../utils/calculateOptions';
import prisma from '../../utils/prisma';
import { adminSearchableFields } from './admin.constant';
import buildSearchFilterConditions from '../../utils/buildConditions';

const getAllAdminsFromDB = async (
    filterData: Partial<Admin>,
    query: TQueryParams,
) => {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } =
        calculateOptions(query);
    const andConditions: Prisma.AdminWhereInput[] = [];

    const searchFilterConditions = buildSearchFilterConditions(
        searchTerm,
        adminSearchableFields,
        filterData,
    );
    if (searchFilterConditions) {
        andConditions.push(...searchFilterConditions);
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
    const admin = await prisma.admin.findUnique({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    if (!admin) {
        throw new ApiError(status.NOT_FOUND, 'Admin not found');
    }
    const result = await prisma.admin.update({
        where: { id },
        data,
    });
    return result;
};

const deleteAdminByIdFromDB = async (id: string) => {
    const admin = await prisma.admin.findUnique({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    if (!admin) {
        throw new ApiError(status.NOT_FOUND, 'Admin not found');
    }
    const result = await prisma.$transaction(async (tx) => {
        const adminDeletedData = await tx.admin.update({
            where: { id },
            data: { isDeleted: true },
        });

        await tx.user.update({
            where: { email: adminDeletedData.email },
            data: { status: 'DELETED' },
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
