import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require("nodemailer");
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export default function sendMessage (req: NextApiRequest, res: NextApiResponse) {
    const { email, message, subject } = req.body.data 
    const { APP_EMAIL_USERNAME, APP_EMAIL_PW } = serverRuntimeConfig;
    // const APP_EMAIL_PW = 'dcjvaysltggehtcr';

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: APP_EMAIL_USERNAME,
            pass: APP_EMAIL_PW
        }
    });
 
    const options = {
        from: APP_EMAIL_USERNAME,
        to: email,
        subject: `Porfolio: ${subject}`, // Subject line
        html: `<b>${message}</b>`,
    };
    type info = {
        message: string;
    };

    return transporter.sendMail(options, (err: string , info: info ) => {
        if (err) {
            res.status(500).json({ error: err })
        }
        res.status(201).json({data: "message sent"});
    });
}
