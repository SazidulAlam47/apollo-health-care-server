import easyinvoice, { InvoiceData } from 'easyinvoice';
import config from '../config';
import { Buffer } from 'buffer';
import { Prisma } from '../../../generated/prisma';

type TPaymentWithDoctorPatient = Prisma.PaymentGetPayload<{
    include: {
        appointment: {
            include: {
                doctor: true;
                patient: true;
            };
        };
    };
}>;

const now = new Date();
const today = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`;

const createInvoice = async (paymentData: TPaymentWithDoctorPatient) => {
    const data: InvoiceData = {
        apiKey: config.easy_invoice_api_key as string,
        mode: config.NODE_ENV === 'development' ? 'development' : 'production',
        products: [
            {
                description: `Appointment with ${paymentData.appointment.doctor.name}`,
                price: paymentData.amount,
            },
        ],
        images: {
            logo: 'https://res.cloudinary.com/dvrqc1qdm/image/upload/v1747855518/health_care_logo_kabqqd.png',
        },
        sender: {
            company: 'Apollo Health Care',
            address: 'House-7, Road-21, Sector-11',
            zip: 'Uttara',
            city: 'Dhaka-1230',
            country: 'Bangladesh',
        },
        client: {
            company: paymentData.appointment.patient.name,
            address: paymentData.appointment.patient.address || 'N/A',
        },
        information: {
            date: today,
        },

        bottomNotice: 'This is an automated invoice.',

        settings: {
            currency: 'BDT',
        },

        translate: {
            products: 'Appointments',
        },
    };

    const result = await easyinvoice.createInvoice(data);

    const pdfBuffer = Buffer.from(result.pdf, 'base64');

    return pdfBuffer;
};

export default createInvoice;
