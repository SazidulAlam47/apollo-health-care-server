"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const admin_validation_1 = require("./admin.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), admin_controller_1.AdminControllers.getAllAdmins);
router.get('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), admin_controller_1.AdminControllers.getAdminById);
router.patch('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), (0, validateRequest_1.default)(admin_validation_1.AdminValidations.adminUpdate), admin_controller_1.AdminControllers.updateAdminById);
router.delete('/:id', (0, auth_1.default)('ADMIN', 'SUPER_ADMIN'), admin_controller_1.AdminControllers.deleteAdminById);
exports.AdminRoutes = router;
