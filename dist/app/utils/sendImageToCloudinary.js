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
exports.upload = void 0;
/* eslint-disable no-console */
const cloudinary_1 = require("cloudinary");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const config_1 = __importDefault(require("../config"));
const sendImageToCloudinary = (imgName, path) => __awaiter(void 0, void 0, void 0, function* () {
    // Configuration
    cloudinary_1.v2.config({
        cloud_name: config_1.default.cloudinary.name,
        api_key: config_1.default.cloudinary.key,
        api_secret: config_1.default.cloudinary.secret,
    });
    // Upload an image
    const uploadResult = yield cloudinary_1.v2.uploader
        .upload(path, {
        public_id: imgName,
    })
        .catch((error) => {
        console.log(error);
    });
    // Delete the file from file system
    fs_1.default.unlinkSync(path);
    if (uploadResult) {
        return uploadResult.secure_url;
    }
    return '';
});
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(process.cwd(), 'uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const ext = path_1.default.extname(file.originalname);
        const name = path_1.default.basename(file.originalname, ext);
        cb(null, `${name}-${uniqueSuffix}${ext}`);
    },
});
exports.upload = (0, multer_1.default)({ storage });
exports.default = sendImageToCloudinary;
