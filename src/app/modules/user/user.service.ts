import prisma from '../../utils/prisma';
import { Admin, Doctor, User, UserRole } from '../../../../generated/prisma';
import { hashPassword } from '../../utils/bcrypt';
import type { Express } from 'express';
import sendImageToCloudinary from '../../utils/sendImageToCloudinary';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import deleteFile from '../../utils/deleteFile';

const createAdminIntoDB = async (
    payload: {
        password: string;
        admin: Pick<Admin, 'name' | 'email' | 'contactNumber' | 'profilePhoto'>;
    },
    file: Express.Multer.File | undefined,
) => {
    const isEmailExists = await prisma.admin.findUnique({
        where: { email: payload.admin.email },
    });
    if (isEmailExists) {
        deleteFile(file);
        throw new ApiError(
            status.CONFLICT,
            'Email already used with another account',
        );
    }

    const isContactNumberExists = await prisma.admin.findUnique({
        where: { contactNumber: payload.admin.contactNumber },
    });
    if (isContactNumberExists) {
        deleteFile(file);
        throw new ApiError(
            status.CONFLICT,
            'Contact Number already used with another account',
        );
    }

    const hashedPassword = await hashPassword(payload.password);

    const userData: Pick<User, 'email' | 'password' | 'role'> = {
        email: payload.admin.email,
        password: hashedPassword,
        role: UserRole.ADMIN,
    };

    const adminData = { ...payload.admin };

    if (file?.size) {
        const imgName = payload.admin.name + '-' + Date.now();
        adminData.profilePhoto = await sendImageToCloudinary(
            imgName,
            file.path,
        );
    }

    const result = await prisma.$transaction(async (tx) => {
        await tx.user.create({
            data: userData,
        });
        const createAdminData = await tx.admin.create({
            data: adminData,
        });
        return createAdminData;
    });

    return result;
};

const createDoctorIntoDB = async (
    payload: {
        password: string;
        doctor: Pick<
            Doctor,
            | 'name'
            | 'email'
            | 'contactNumber'
            | 'profilePhoto'
            | 'address'
            | 'registrationNumber'
            | 'experience'
            | 'gender'
            | 'appointmentFee'
            | 'qualification'
            | 'currentWorkingPlace'
            | 'designation'
            | 'averageRating'
        >;
    },
    file: Express.Multer.File | undefined,
) => {
    const isEmailExists = await prisma.doctor.findUnique({
        where: { email: payload.doctor.email },
    });
    if (isEmailExists) {
        deleteFile(file);
        throw new ApiError(
            status.CONFLICT,
            'Email already used with another account',
        );
    }

    const isContactNumberExists = await prisma.doctor.findUnique({
        where: { contactNumber: payload.doctor.contactNumber },
    });
    if (isContactNumberExists) {
        deleteFile(file);
        throw new ApiError(
            status.CONFLICT,
            'Contact Number already used with another account',
        );
    }

    const hashedPassword = await hashPassword(payload.password);

    const userData: Pick<User, 'email' | 'password' | 'role'> = {
        email: payload.doctor.email,
        password: hashedPassword,
        role: UserRole.DOCTOR,
    };

    const doctorData = { ...payload.doctor };

    if (file?.size) {
        const imgName = payload.doctor.name + '-' + Date.now();
        doctorData.profilePhoto = await sendImageToCloudinary(
            imgName,
            file.path,
        );
    }

    const result = await prisma.$transaction(async (tx) => {
        await tx.user.create({
            data: userData,
        });
        const createDoctorData = await tx.doctor.create({
            data: doctorData,
        });
        return createDoctorData;
    });

    return result;
};

export const UserServices = {
    createAdminIntoDB,
    createDoctorIntoDB,
};
