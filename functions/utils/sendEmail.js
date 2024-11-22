const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "dacv696@gmail.com",
            pass: "jnomeqfrbhiinkog",
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    const message = {
        from: options?.email,
        to: "aqibsiddique155@gmail.com",
        subject: options.subject,
        html: options.html,
    };
    const info = await transporter.sendMail(message);
};
module.exports = sendEmail;
