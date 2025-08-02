"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const deleteFile = (file) => {
    const filePath = file === null || file === void 0 ? void 0 : file.path;
    if (filePath) {
        fs_1.default.unlinkSync(filePath);
    }
};
exports.default = deleteFile;
