"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const review_service_1 = require("./review.service");
const pick_1 = __importDefault(require("../../utils/pick"));
const constants_1 = require("../../constants");
const review_constant_1 = require("./review.constant");
const createReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = req;
    const result = yield review_service_1.ReviewServices.createReview(req.body, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Review created successfully',
        data: result,
    });
}));
const getAllReviews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, review_constant_1.reviewFilters);
    const query = (0, pick_1.default)(req.query, constants_1.queryFilters);
    const result = yield review_service_1.ReviewServices.getAllReviews(filters, query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: 'All Doctor are fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
exports.ReviewControllers = {
    createReview,
    getAllReviews
};
