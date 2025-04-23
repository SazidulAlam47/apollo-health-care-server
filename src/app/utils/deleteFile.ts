import fs from 'fs';
import { Express } from 'express';

const deleteFile = (file?: Express.Multer.File) => {
    const filePath = file?.path;
    if (filePath) {
        fs.unlinkSync(filePath);
    }
};

export default deleteFile;
