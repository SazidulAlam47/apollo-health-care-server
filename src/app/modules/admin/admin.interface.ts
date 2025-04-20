import { Admin } from '../../../../generated/prisma';

export type TAdminFilters = Partial<
    Pick<Admin, 'name' | 'contactNumber' | 'profilePhoto'>
>;

export type TAdminFilterKeys = keyof Admin;
