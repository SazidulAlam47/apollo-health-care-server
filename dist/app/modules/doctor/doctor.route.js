"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const doctor_controller_1 = require("./doctor.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const doctor_validation_1 = require("./doctor.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get('/', doctor_controller_1.DoctorControllers.getAllDoctors);
router.get('/:id', doctor_controller_1.DoctorControllers.getDoctorById);
router.delete('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), doctor_controller_1.DoctorControllers.deleteDoctorById);
router.patch('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), (0, validateRequest_1.default)(doctor_validation_1.DoctorValidations.doctorUpdate), doctor_controller_1.DoctorControllers.updateDoctorById);
exports.DoctorRoutes = router;
