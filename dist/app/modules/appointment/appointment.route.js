"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const appointment_controller_1 = require("./appointment.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const appointment_validation_1 = require("./appointment.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), appointment_controller_1.AppointmentControllers.getAllAppointments);
router.get('/my-appointments', (0, auth_1.default)('DOCTOR', 'PATIENT'), appointment_controller_1.AppointmentControllers.getMyAppointments);
router.get('/video-call/:id', (0, auth_1.default)('DOCTOR', 'PATIENT'), appointment_controller_1.AppointmentControllers.verifyVideoCall);
router.post('/', (0, auth_1.default)('PATIENT'), (0, validateRequest_1.default)(appointment_validation_1.AppointmentValidations.createAppointment), appointment_controller_1.AppointmentControllers.createAppointment);
router.patch('/status/:id', (0, auth_1.default)('DOCTOR', 'ADMIN', 'SUPER_ADMIN'), (0, validateRequest_1.default)(appointment_validation_1.AppointmentValidations.changeAppointmentStatus), appointment_controller_1.AppointmentControllers.changeAppointmentStatus);
exports.AppointmentRoutes = router;
