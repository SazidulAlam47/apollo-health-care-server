/* eslint-disable no-console */
import config from '../config';
import { hashPassword } from '../utils/bcrypt';
import prisma from '../utils/prisma';

const seedSuperAdmin = async () => {
    try {
        const hashedPassword = await hashPassword(
            config.super_admin_password as string,
        );

        const isSuperAdminExists = await prisma.user.findFirst({
            where: {
                role: 'SUPER_ADMIN',
            },
        });

        if (!isSuperAdminExists) {
            await prisma.user.create({
                data: {
                    email: 'super@example.com',
                    password: hashedPassword,
                    role: 'SUPER_ADMIN',
                    needPasswordChange: false,
                    status: 'ACTIVE',
                },
            });
        }
    } catch (err) {
        console.log(err);
    }
};
export default seedSuperAdmin;
