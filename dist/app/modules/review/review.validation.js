"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidations = void 0;
const zod_1 = require("zod");
const createReview = zod_1.z.object({
    appointmentId: zod_1.z.string(),
    rating: zod_1.z.number(),
    comment: zod_1.z.string().optional(),
});
exports.ReviewValidations = {
    createReview,
};
