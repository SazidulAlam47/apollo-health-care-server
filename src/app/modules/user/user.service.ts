import prisma from '../../utils/prisma';
import { Admin, User, UserRole } from '../../../../generated/prisma';
import { hashPassword } from '../../utils/bcrypt';
import type { Express } from 'express';
import sendImageToCloudinary from '../../utils/sendImageToCloudinary';

const createAdminIntoDB = async (
    payload: {
        password: string;
        admin: Pick<Admin, 'name' | 'email' | 'contactNumber' | 'profilePhoto'>;
    },
    file: Express.Multer.File | undefined,
) => {
    const hashedPassword = await hashPassword(payload.password);

    const userData: Pick<User, 'email' | 'password' | 'role'> = {
        email: payload.admin.email,
        password: hashedPassword,
        role: UserRole.ADMIN,
    };

    const adminData: Pick<
        Admin,
        'name' | 'email' | 'contactNumber' | 'profilePhoto'
    > = { ...payload.admin };

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

export const UserServices = {
    createAdminIntoDB,
};
