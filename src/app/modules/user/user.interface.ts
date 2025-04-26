import { z } from 'zod';
import { User } from '../../../../generated/prisma';
import { UserValidations } from './user.validation';

export type TUserFilterKeys = keyof User;

export type TUpdateMyProfile = z.infer<
    typeof UserValidations.updateMyProfile
> & {
    profilePhoto?: string;
};
