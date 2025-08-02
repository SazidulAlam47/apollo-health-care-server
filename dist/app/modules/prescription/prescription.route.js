"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prescription_controller_1 = require("./prescription.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const prescription_validation_1 = require("./prescription.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), prescription_controller_1.PrescriptionControllers.getAllPrescriptions);
router.get('/my-prescriptions', (0, auth_1.default)('PATIENT'), prescription_controller_1.PrescriptionControllers.getPatientPrescriptions);
router.post('/', (0, auth_1.default)('DOCTOR'), (0, validateRequest_1.default)(prescription_validation_1.PrescriptionValidations.createPrescription), prescription_controller_1.PrescriptionControllers.createPrescription);
exports.PrescriptionRoutes = router;
