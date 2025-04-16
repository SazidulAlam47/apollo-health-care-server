import { PrismaClient, UserRole } from "../../../../generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const createAdmin = async (payload: any) => {
    const hashedPassword = await bcrypt.hash(payload.password, 12);

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
    createAdmin,
};
