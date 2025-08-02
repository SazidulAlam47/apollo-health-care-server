"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidations.login), auth_controller_1.AuthControllers.loginUser);
router.get('/logout', auth_controller_1.AuthControllers.logoutUser);
router.get('/refresh-token', auth_controller_1.AuthControllers.refreshToken);
router.post('/change-password', (0, auth_1.default)(), (0, validateRequest_1.default)(auth_validation_1.AuthValidations.changePassword), auth_controller_1.AuthControllers.changePassword);
router.post('/forgot-password', (0, validateRequest_1.default)(auth_validation_1.AuthValidations.forgotPassword), auth_controller_1.AuthControllers.forgotPassword);
router.post('/reset-password', (0, validateRequest_1.default)(auth_validation_1.AuthValidations.resetPassword), auth_controller_1.AuthControllers.resetPassword);
exports.AuthRoutes = router;
