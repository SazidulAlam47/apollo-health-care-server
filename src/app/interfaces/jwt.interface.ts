import { JwtPayload } from 'jsonwebtoken';
import { UserRole } from '../../../generated/prisma';

export type TDecodedUser = {
    email: string;
    role: UserRole;
} & JwtPayload;
