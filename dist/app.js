"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basePath = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = __importDefault(require("./app/config"));
const scheduleProcesses_1 = __importDefault(require("./app/DB/scheduleProcesses"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: [config_1.default.client_url], credentials: true }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
(0, scheduleProcesses_1.default)();
const test = (req, res) => {
    res.send({ message: 'Apollo Health Care Server is Running...' });
};
exports.basePath = '/api/v1';
// test route
app.get('/', test);
// application routes
app.use(exports.basePath, routes_1.default);
// global error handler
app.use(globalErrorHandler_1.default);
// not found route
app.use(notFound_1.default);
exports.default = app;
