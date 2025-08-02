"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorScheduleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const doctorSchedule_controller_1 = require("./doctorSchedule.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const doctorSchedule_validation_1 = require("./doctorSchedule.validation");
const router = express_1.default.Router();
router.get('/', doctorSchedule_controller_1.DoctorScheduleControllers.getAllDoctorSchedule);
router.get('/my-schedule', (0, auth_1.default)('DOCTOR'), doctorSchedule_controller_1.DoctorScheduleControllers.getMySchedules);
router.post('/', (0, auth_1.default)('DOCTOR'), (0, validateRequest_1.default)(doctorSchedule_validation_1.DoctorScheduleValidations.createDoctorSchedule), doctorSchedule_controller_1.DoctorScheduleControllers.createDoctorSchedule);
router.delete('/:id', (0, auth_1.default)('DOCTOR'), doctorSchedule_controller_1.DoctorScheduleControllers.deleteMySchedule);
exports.DoctorScheduleRoutes = router;
