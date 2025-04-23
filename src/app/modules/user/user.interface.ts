import { User, UserRole } from '../../../../generated/prisma';

export type TUserRole = keyof typeof UserRole;

export type TUserFilterKeys = keyof User;
