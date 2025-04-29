import { z } from 'zod';

const createSpecialties = z.object({
    title: z.string(),
});

export const SpecialtiesValidations = {
    createSpecialties,
};
