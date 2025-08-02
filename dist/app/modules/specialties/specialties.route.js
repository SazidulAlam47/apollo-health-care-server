"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtiesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const specialties_controller_1 = require("./specialties.controller");
const specialties_validation_1 = require("./specialties.validation");
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const validateRequestWithFileCleanup_1 = __importDefault(require("../../middlewares/validateRequestWithFileCleanup"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get('/', specialties_controller_1.SpecialtiesControllers.getAllSpecialties);
router.post('/', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), sendImageToCloudinary_1.upload.single('file'), (0, validateRequestWithFileCleanup_1.default)(specialties_validation_1.SpecialtiesValidations.createSpecialties), specialties_controller_1.SpecialtiesControllers.createSpecialties);
router.delete('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), specialties_controller_1.SpecialtiesControllers.deleteSpecialtiesById);
exports.SpecialtiesRoutes = router;
