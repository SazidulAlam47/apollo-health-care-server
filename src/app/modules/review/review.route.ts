import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidations } from './review.validation';
import { ReviewControllers } from './review.controller';

const router = express.Router();

router.post(
    '/',
    auth('PATIENT'),
    validateRequest(ReviewValidations.createReview),
    ReviewControllers.createReview,
);

export const ReviewRoutes = router;
