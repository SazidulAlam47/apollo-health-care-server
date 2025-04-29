import status from 'http-status';
import { Express } from 'express';
import { Specialties } from '../../../../generated/prisma';
import ApiError from '../../errors/ApiError';
import sendImageToCloudinary from '../../utils/sendImageToCloudinary';
import prisma from '../../utils/prisma';
import deleteFile from '../../utils/deleteFile';

const createSpecialtiesIntoDB = async (
    payload: Specialties,
    file: Express.Multer.File | undefined,
) => {
    const isSpecialtiesExists = await prisma.specialties.findUnique({
        where: { title: payload.title },
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

const getAllSpecialtiesFromDB = async () => {
    const result = await prisma.specialties.findMany();
    return result;
};

const deleteSpecialtiesByIdFromDB = async (id: string) => {
    const isSpecialtiesExists = await prisma.specialties.findUnique({
        where: { id },
    });
    if (!isSpecialtiesExists) {
        throw new ApiError(status.NOT_FOUND, 'Specialties does not Exists');
    }
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
