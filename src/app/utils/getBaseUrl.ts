import { Request } from 'express';

const getBaseUrl = (req: Request) => {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const apiBaseUrl = `${protocol}://${req.get('host')}`;

    return apiBaseUrl;
};

export default getBaseUrl;
