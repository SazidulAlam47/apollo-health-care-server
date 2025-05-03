import prisma from '../../utils/prisma';
import {
    Admin,
    Doctor,
    Patient,
    Prisma,
    User,
    UserRole,
    UserStatus,
} from '../../../../generated/prisma';
import { hashPassword } from '../../utils/bcrypt';
import type { Express } from 'express';
import sendImageToCloudinary from '../../utils/sendImageToCloudinary';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import deleteFile from '../../utils/deleteFile';
import { TQueryParams } from '../../interfaces';
import calculateOptions from '../../utils/calculateOptions';
import buildSearchFilterConditions from '../../utils/buildSearchFilterConditions';
import { userSearchableFields } from './user.constant';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import { TUpdateMyProfile } from './user.interface';
import pick from '../../utils/pick';

const createAdminIntoDB = async (
    payload: {
        password: string;
        admin: Pick<Admin, 'name' | 'email' | 'contactNumber' | 'profilePhoto'>;
    },
    file: Express.Multer.File | undefined,
) => {
    const isEmailExists = await prisma.admin.findUnique({
        where: { email: payload.admin.email },
        select: { id: true },
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
        select: { id: true },
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
        select: { id: true },
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
        select: { id: true },
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

const createPatientIntoDB = async (
    payload: {
        password: string;
        patient: Pick<
            Patient,
            'name' | 'email' | 'contactNumber' | 'profilePhoto' | 'address'
        >;
    },
    file: Express.Multer.File | undefined,
) => {
    const isEmailExists = await prisma.patient.findUnique({
        where: { email: payload.patient.email },
        select: { id: true },
    });
    if (isEmailExists) {
        deleteFile(file);
        throw new ApiError(
            status.CONFLICT,
            'Email already used with another account',
        );
    }

    const isContactNumberExists = await prisma.patient.findUnique({
        where: { contactNumber: payload.patient.contactNumber },
        select: { id: true },
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
        email: payload.patient.email,
        password: hashedPassword,
        role: UserRole.PATIENT,
    };

    const patientData = { ...payload.patient };

    if (file?.size) {
        const imgName = payload.patient.name + '-' + Date.now();
        patientData.profilePhoto = await sendImageToCloudinary(
            imgName,
            file.path,
        );
    }

    const result = await prisma.$transaction(async (tx) => {
        await tx.user.create({
            data: userData,
        });
        const createDoctorData = await tx.patient.create({
            data: patientData,
        });
        return createDoctorData;
    });

    return result;
};

const getAllUsersFromDB = async (
    filterData: Partial<User>,
    query: TQueryParams,
) => {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } =
        calculateOptions(query);
    const andConditions: Prisma.UserWhereInput[] = [];

    const searchFilterConditions = buildSearchFilterConditions(
        searchTerm,
        userSearchableFields,
        filterData,
    );
    andConditions.push(...searchFilterConditions);

    // check the condition
    // console.dir(andConditions, { depth: Infinity });

    const whereCondition: Prisma.UserWhereInput = { AND: andConditions };

    const result = await prisma.user.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        select: {
            id: true,
            email: true,
            role: true,
            needPasswordChange: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            admin: true,
            doctor: true,
            patient: true,
        },
    });

    const totalData = await prisma.user.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

const changeProfileStatusIntoDB = async (
    id: string,
    userStatus: UserStatus,
) => {
    const user = await prisma.user.findUnique({
        where: { id },
        select: { id: true, status: true },
    });
    if (!user) {
        throw new ApiError(status.NOT_FOUND, 'User not found');
    }
    if (user.status === userStatus) {
        throw new ApiError(
            status.BAD_REQUEST,
            `User is already ${user.status}`,
        );
    }

    const updatedUser = await prisma.user.update({
        where: { id },
        data: { status: userStatus },
    });

    return updatedUser;
};

const getMyProfileFromDB = async (userData: TDecodedUser) => {
    const user = await prisma.user.findUnique({
        where: { email: userData.email, status: 'ACTIVE' },
        select: {
            id: true,
            email: true,
            role: true,
            needPasswordChange: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            admin: userData.role === 'ADMIN',
            doctor: userData.role === 'DOCTOR',
            patient: userData.role === 'PATIENT',
        },
    });
    if (!user) {
        throw new ApiError(status.NOT_FOUND, 'User not found');
    }

    const { admin, doctor, patient, ...userInfo } = user;

    return { ...userInfo, ...admin, ...doctor, ...patient };
};

const updateMyProfileIntoDB = async (
    userData: TDecodedUser,
    payload: TUpdateMyProfile,
    file: Express.Multer.File | undefined,
) => {
    const user = await prisma.user.findUnique({
        where: { email: userData.email, status: 'ACTIVE' },
    });
    if (!user) {
        deleteFile(file);
        throw new ApiError(status.NOT_FOUND, 'User not found');
    }

    if (file) {
        const imgName = `${user.id}` + '-' + Date.now();
        payload.profilePhoto = await sendImageToCloudinary(imgName, file.path);
    }

    let result;
    if (user.role == 'ADMIN') {
        const adminUpdate = pick(payload, [
            'name',
            'contactNumber',
            'profilePhoto',
        ]);
        result = await prisma.admin.update({
            where: { email: user.email },
            data: adminUpdate,
        });
    }

    if (user.role == 'PATIENT') {
        const patientUpdate = pick(payload, [
            'name',
            'contactNumber',
            'address',
            'profilePhoto',
        ]);
        result = await prisma.patient.update({
            where: { email: user.email },
            data: patientUpdate,
        });
    }

    if (user.role == 'DOCTOR') {
        result = await prisma.patient.update({
            where: { email: user.email },
            data: payload,
        });
    }

    return result;
};

export const UserServices = {
    createAdminIntoDB,
    createDoctorIntoDB,
    createPatientIntoDB,
    getAllUsersFromDB,
    changeProfileStatusIntoDB,
    getMyProfileFromDB,
    updateMyProfileIntoDB,
};
