import { RequestHandler } from 'express';

const fromDataToJson: RequestHandler = (req, res, next) => {
    req.body = JSON.parse(req.body.data);

    next();
};

export default fromDataToJson;
