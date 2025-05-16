import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import cookieParser from 'cookie-parser';
import config from './app/config';
import { AppointmentServices } from './app/modules/appointment/appointment.service';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors({ origin: [config.client_url as string], credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

AppointmentServices.cancelUnpaidAppointments();

const test = (req: Request, res: Response) => {
    res.send({ message: 'Apollo Health Care Server is Running...' });
};

export const basePath = '/api/v1';

// test route
app.get('/', test);

// application routes
app.use(basePath, router);

// global error handler
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
