import { z } from 'zod';

const createReview = z.object({
    appointmentId: z.string(),
    rating: z.number(),
    comment: z.string().optional(),
});

export const ReviewValidations = {
    createReview,
};
