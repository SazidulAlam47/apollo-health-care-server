import bcrypt from 'bcrypt';
import config from '../config';
import ApiError from '../errors/ApiError';
import status from 'http-status';

export const hashPassword = async (password: string) =>
    await bcrypt.hash(password, Number(config.bcrypt_salt_rounds));

export const comparePassword = async (
    plainTextPassword: string,
    hashedPassword: string,
) => {
    const compare = await bcrypt.compare(plainTextPassword, hashedPassword);

    if (!compare) {
        throw new ApiError(status.UNAUTHORIZED, 'Password did not matched');
    }
};
