import { z } from 'zod';
import { ReviewValidations } from './review.validation';

export type TCreateReviewPayload = z.infer<
    typeof ReviewValidations.createReview
>;
