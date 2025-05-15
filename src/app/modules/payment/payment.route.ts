import express from 'express';
import { PaymentControllers } from './payment.controller';

const router = express.Router();

router.post('/init-payment', PaymentControllers.initPayment);

router.post('/success', PaymentControllers.validatePayment);

export const PaymentRoutes = router;
