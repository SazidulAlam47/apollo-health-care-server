"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtiesValidations = void 0;
const zod_1 = require("zod");
const createSpecialties = zod_1.z.object({
    title: zod_1.z.string(),
});
exports.SpecialtiesValidations = {
    createSpecialties,
};
