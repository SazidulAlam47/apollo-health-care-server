"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt: {
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
        access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
        refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
        refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
        reset_pass_secret: process.env.RESET_PASS_TOKEN,
        reset_pass_token_expires_in: process.env.RESET_PASS_TOKEN_EXPIRES_IN,
    },
    client_url: process.env.CLIENT_URL,
    node_mailer: {
        email: process.env.NODE_MAILER_EMAIL,
        password: process.env.NODE_MAILER_PASSWORD,
    },
    cloudinary: {
        name: process.env.CLOUDINARY_NAME,
        key: process.env.CLOUDINARY_KEY,
        secret: process.env.CLOUDINARY_SECRET,
    },
    ssl: {
        storeId: process.env.STORE_ID,
        storePass: process.env.STORE_PASS,
    },
    super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
    easy_invoice_api_key: process.env.EASY_INVOICE_API_KEY,
};
