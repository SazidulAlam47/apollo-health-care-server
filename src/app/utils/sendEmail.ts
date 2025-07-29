/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import nodemailer from 'nodemailer';
import config from '../config';
import status from 'http-status';
import ApiError from '../errors/ApiError';
import { Buffer } from 'buffer';

const sendEmail = async (
    to: string,
    subject: string,
    html: string,
    pdfBuffer?: Buffer<ArrayBuffer>,
) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.node_mailer.email,
                pass: config.node_mailer.password,
            },
        });

        await transporter.sendMail({
            from: `"Apollo Health Care" <${config.node_mailer.email}>`,
            to,
            subject,
            html,
            attachments: pdfBuffer
                ? [
                      {
                          filename: 'invoice.pdf',
                          content: pdfBuffer,
                          contentType: 'application/pdf',
                      },
                  ]
                : [],
        });
    } catch (err) {
        throw new ApiError(
            status.INTERNAL_SERVER_ERROR,
            'Failed to send Email',
        );
    }
};

export default sendEmail;
