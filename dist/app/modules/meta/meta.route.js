"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaRoutes = void 0;
const express_1 = __importDefault(require("express"));
const meta_controller_1 = require("./meta.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(), meta_controller_1.MetaControllers.getDashboardMetaData);
exports.MetaRoutes = router;
