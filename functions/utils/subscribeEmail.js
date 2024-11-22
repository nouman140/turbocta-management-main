const nodemailer = require("nodemailer");
const subscribeEmail= async (options) => {
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
    from: "aqibsiddique155@gmail.com",
    to: options?.email,
    subject: options.subject,
    html: options.html,
  };
  const info = await transporter.sendMail(message);
};
module.exports = subscribeEmail;
