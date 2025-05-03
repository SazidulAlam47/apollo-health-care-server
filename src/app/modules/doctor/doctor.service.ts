import status from 'http-status';
import { Doctor, Prisma } from '../../../../generated/prisma';
import { TQueryParams } from '../../interfaces';
import ApiError from '../../errors/ApiError';
import calculateOptions from '../../utils/calculateOptions';
import prisma from '../../utils/prisma';
import buildSearchFilterConditions from '../../utils/buildConditions';
import { doctorSearchableFields } from './doctor.constant';
import { TDoctorUpdate } from './doctor.interface';

const getAllDoctorsFromDB = async (
    filters: Partial<Doctor> & { specialties?: string },
    query: TQueryParams,
) => {
    const { page, limit, skip, sortBy, sortOrder, searchTerm } =
        calculateOptions(query);
    const { specialties, ...filterData } = filters;

    const andConditions: Prisma.DoctorWhereInput[] = [];

    if (specialties && specialties?.length) {
        andConditions.push({
            doctorSpecialties: {
                some: {
                    specialties: {
                        title: {
                            contains: specialties,
                            mode: 'insensitive',
                        },
                    },
                },
            },
        });
    }

    const searchFilterConditions = buildSearchFilterConditions(
        searchTerm,
        doctorSearchableFields,
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

    const whereCondition: Prisma.DoctorWhereInput = { AND: andConditions };

    const result = await prisma.doctor.findMany({
        where: whereCondition,
        skip: skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            doctorSpecialties: {
                include: {
                    specialties: true,
                },
            },
        },
    });

    const totalData = await prisma.doctor.count({
        where: whereCondition,
    });
    const totalPage = Math.ceil(totalData / limit);

    return { data: result, meta: { page, limit, totalData, totalPage } };
};

const getDoctorByIdFromDB = async (id: string) => {
    const result = await prisma.doctor.findUnique({
        where: { id, isDeleted: false },
        include: {
            doctorSpecialties: {
                include: {
                    specialties: true,
                },
            },
        },
    });
    return result;
};

const deleteDoctorByIdFromDB = async (id: string) => {
    const doctor = await prisma.doctor.findUnique({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    if (!doctor) {
        throw new ApiError(status.NOT_FOUND, 'Doctor not found');
    }
    const result = await prisma.$transaction(async (tx) => {
        const doctorDeletedData = await tx.doctor.update({
            where: { id },
            data: { isDeleted: true },
        });

        await tx.user.update({
            where: { email: doctorDeletedData.email },
            data: { status: 'DELETED' },
        });

        return doctorDeletedData;
    });
    return result;
};

const updateDoctorByIdIntoDB = async (id: string, payload: TDoctorUpdate) => {
    const { specialties, ...doctorData } = payload;
    const doctor = await prisma.doctor.findUnique({
        where: { id, isDeleted: false },
        select: { id: true },
    });
    if (!doctor) {
        throw new ApiError(status.NOT_FOUND, 'Doctor not found');
    }

    const result = await prisma.$transaction(async (tx) => {
        if (specialties && specialties?.length) {
            // remove Specialties
            const removeSpecialties = specialties?.filter(
                (specialty) => specialty.isDeleted === true,
            );

            if (removeSpecialties?.length) {
                for (const removeSpecialty of removeSpecialties) {
                    await tx.doctorSpecialties.deleteMany({
                        where: {
                            specialitiesId: removeSpecialty.specialtiesId,
                            doctorId: doctor.id,
                        },
                    });
                }
            }

            // add Specialties
            const addSpecialties = specialties?.filter(
                (specialty) => specialty.isDeleted === false,
            );
            if (addSpecialties?.length) {
                for (const addSpecialty of addSpecialties) {
                    // check before adding
                    const isSpecialtyExists =
                        await tx.doctorSpecialties.findFirst({
                            where: {
                                doctorId: doctor.id,
                                specialitiesId: addSpecialty.specialtiesId,
                            },
                        });
                    // if exists then skip
                    if (isSpecialtyExists) continue;

                    await tx.doctorSpecialties.create({
                        data: {
                            doctorId: doctor.id,
                            specialitiesId: addSpecialty.specialtiesId,
                        },
                    });
                }
            }
        }

        const updatedDoctor = await tx.doctor.update({
            where: { id },
            data: doctorData,
            include: {
                doctorSpecialties: {
                    include: {
                        specialties: true,
                    },
                },
            },
        });

        return updatedDoctor;
    });

    return result;
};

export const DoctorServices = {
    getAllDoctorsFromDB,
    getDoctorByIdFromDB,
    updateDoctorByIdIntoDB,
    deleteDoctorByIdFromDB,
};
