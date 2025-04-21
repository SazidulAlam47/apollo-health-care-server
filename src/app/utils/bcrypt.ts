import bcrypt from 'bcrypt';
import config from '../config';

export const hashPassword = async (password: string) =>
    await bcrypt.hash(password, Number(config.bcrypt_salt_rounds));

export const comparePassword = async (
    plainTextPassword: string,
    hashedPassword: string,
) => await bcrypt.compare(plainTextPassword, hashedPassword);
