"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const schedule_controller_1 = require("./schedule.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const schedule_validation_1 = require("./schedule.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)('DOCTOR', 'ADMIN', 'SUPER_ADMIN'), schedule_controller_1.ScheduleControllers.getAllSchedules);
router.get('/:id', (0, auth_1.default)('DOCTOR', 'ADMIN', 'SUPER_ADMIN'), schedule_controller_1.ScheduleControllers.getScheduleById);
router.post('/', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), (0, validateRequest_1.default)(schedule_validation_1.ScheduleValidations.createSchedule), schedule_controller_1.ScheduleControllers.createSchedule);
router.delete('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), schedule_controller_1.ScheduleControllers.deleteScheduleById);
exports.ScheduleRoutes = router;
