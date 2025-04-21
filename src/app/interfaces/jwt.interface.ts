import { JwtPayload } from 'jsonwebtoken';
import { UserRole } from '../../../generated/prisma';

export type TDecodedUser = {
    email: string;
    role: keyof typeof UserRole;
} & JwtPayload;
