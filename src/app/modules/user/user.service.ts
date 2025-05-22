import prisma from '../../utils/prisma';
import { Prisma, User, UserStatus } from '../../../../generated/prisma';
import { hashPassword } from '../../utils/bcrypt';
import sendImageToCloudinary from '../../utils/sendImageToCloudinary';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import deleteFile from '../../utils/deleteFile';
import { TQueryParams } from '../../interfaces';
import calculateOptions from '../../utils/calculateOptions';
import buildSearchFilterConditions from '../../utils/buildSearchFilterConditions';
import { userSearchableFields } from './user.constant';
import { TDecodedUser } from '../../interfaces/jwt.interface';
import {
    TCreateAdminPayload,
    TCreateDoctorPayload,
    TCreatePatientPayload,
    TFile,
    TUpdateMyProfile,
} from './user.interface';
import pick from '../../utils/pick';

const createAdminIntoDB = async (payload: TCreateAdminPayload, file: TFile) => {
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
        role: 'ADMIN',
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
    payload: TCreateDoctorPayload,
    file: TFile,
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
        role: 'DOCTOR',
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
    payload: TCreatePatientPayload,
    file: TFile,
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

    const userData: Pick<
        User,
        'email' | 'password' | 'role' | 'needPasswordChange'
    > = {
        email: payload.patient.email,
        password: hashedPassword,
        role: 'PATIENT',
        needPasswordChange: false,
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
    const user = await prisma.user.findUniqueOrThrow({
        where: { id },
        select: { id: true, status: true },
    });

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
    const user = await prisma.user.findUniqueOrThrow({
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

    const { admin, doctor, patient, ...userInfo } = user;

    return { ...userInfo, ...admin, ...doctor, ...patient };
};

const updateMyProfileIntoDB = async (
    userData: TDecodedUser,
    payload: TUpdateMyProfile,
    file: TFile,
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
