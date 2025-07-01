import status from 'http-status';
import { Specialties } from '../../../../generated/prisma';
import ApiError from '../../errors/ApiError';
import sendImageToCloudinary from '../../utils/sendImageToCloudinary';
import prisma from '../../utils/prisma';
import deleteFile from '../../utils/deleteFile';
import { TQueryParams } from '../../interfaces';
import calculateOptions from '../../utils/calculateOptions';
import { TFile } from '../user/user.interface';

const createSpecialtiesIntoDB = async (payload: Specialties, file: TFile) => {
    const isSpecialtiesExists = await prisma.specialties.findUnique({
        where: { title: payload.title },
        select: { id: true },
    });
    if (isSpecialtiesExists) {
        deleteFile(file);
        throw new ApiError(status.CONFLICT, 'Specialties is already Exists');
    }

    if (!file) {
        throw new ApiError(status.BAD_REQUEST, 'Please upload a Icon');
    }

    const cloudinaryName = payload.title + '-' + Date.now();
    payload.icon = await sendImageToCloudinary(cloudinaryName, file.path);

    const result = await prisma.specialties.create({
        data: payload,
    });

    return result;
};

const getAllSpecialtiesFromDB = async (query: TQueryParams) => {
    const { page, limit, skip } = calculateOptions(query);

    const result = await prisma.specialties.findMany({
        skip: skip,
        take: limit,
    });

    const totalData = await prisma.specialties.count();
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

const deleteSpecialtiesByIdFromDB = async (id: string) => {
    await prisma.specialties.findUniqueOrThrow({
        where: { id },
        select: { id: true },
    });

    const result = await prisma.specialties.delete({
        where: { id },
    });
    return result;
};

export const SpecialtiesServices = {
    createSpecialtiesIntoDB,
    getAllSpecialtiesFromDB,
    deleteSpecialtiesByIdFromDB,
};
