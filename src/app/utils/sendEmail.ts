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
            host: config.node_mailer.host,
            port: parseInt(config.node_mailer.port as string),
            secure: config.NODE_ENV === 'production',
            auth: {
                user: config.node_mailer.user,
                pass: config.node_mailer.password,
            },
            tls: {
                rejectUnauthorized: false,
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
