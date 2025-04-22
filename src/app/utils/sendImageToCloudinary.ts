/* eslint-disable no-console */
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const sendImageToCloudinary = async (
    imgName: string,
    path: string,
): Promise<string> => {
    const uploadResult: UploadApiResponse | void = await cloudinary.uploader
        .upload(path, {
            public_id: imgName,
        })
        .catch((error) => {
            console.log(error);
        });

    // delete the file from file system
    fs.unlinkSync(path);

    if (uploadResult) {
        return uploadResult.secure_url;
    }
    return '';
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), 'uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
        cb(null, `${name}-${uniqueSuffix}${ext}`);
    },
});

export const upload = multer({ storage });

export default sendImageToCloudinary;
