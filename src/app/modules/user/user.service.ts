import prisma from '../../utils/prisma';
import { Admin, UserRole } from '../../../../generated/prisma';
import { hashPassword } from '../../utils/bcrypt';

const createAdminIntoDB = async (payload: {
    password: string;
    admin: Pick<Admin, 'name' | 'email' | 'contactNumber' | 'profilePhoto'>;
}) => {
    const hashedPassword = await hashPassword(payload.password);

    const userData = {
        email: payload.admin.email,
        password: hashedPassword,
        role: UserRole.ADMIN,
    };

    const result = await prisma.$transaction(async (tx) => {
        await tx.user.create({
            data: userData,
        });
        const createAdminData = await tx.admin.create({
            data: payload.admin,
        });
        return createAdminData;
    });

    return result;
};

export const UserServices = {
    createAdminIntoDB,
};
