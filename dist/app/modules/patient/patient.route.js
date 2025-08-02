"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientRoutes = void 0;
const express_1 = __importDefault(require("express"));
const patient_controller_1 = require("./patient.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const patient_validation_1 = require("./patient.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), patient_controller_1.PatientControllers.getAllPatients);
router.get('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), patient_controller_1.PatientControllers.getPatientById);
router.delete('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), patient_controller_1.PatientControllers.deletePatientById);
router.patch('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), (0, validateRequest_1.default)(patient_validation_1.PatientValidations.patientUpdate), patient_controller_1.PatientControllers.updatePatientById);
exports.PatientRoutes = router;
