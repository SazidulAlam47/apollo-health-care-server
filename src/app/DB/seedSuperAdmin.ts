import { UserRole, UserStatus } from '../../../generated/prisma';
import config from '../config';
import { hashPassword } from '../utils/bcrypt';
import prisma from '../utils/prisma';

const seedSuperAdmin = async () => {
    const hashedPassword = await hashPassword(
        config.super_admin_password as string,
    );

    const superUser = {
        email: 'super@example.com',
        password: hashedPassword,
        role: UserRole.SUPER_ADMIN,
        needPasswordChange: false,
        status: UserStatus.ACTIVE,
    };

    const isSuperAdminExists = await prisma.user.findMany({
        where: {
            role: UserRole.SUPER_ADMIN,
        },
    });

    if (!isSuperAdminExists.length) {
        await prisma.user.create({
            data: superUser,
        });
    }
};
export default seedSuperAdmin;
