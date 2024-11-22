const express = require("express");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const sendEmail = require("./utils/sendEmail");
const instructionEmail = require("./utils/instructionEmail");
const subscribeEmail = require("./utils/subscribeEmail");
admin.initializeApp();
const app = express();
// Body parser
app.use(express.json());
app.use(cors());
const stripe = require("stripe")(
  "sk_test_51OzbyjLMVjLXM79oMKgRn65mGCX5g6w2JUoaJy5AZx7bPiA3gLMqaZ95qfTcG6b0QrrbdE4pVgtXK8HwFzHv9QOW00v8Btj9xG"
);

app.post("/sendEmail", async (req, res) => {
  try {
    let htmlData = `<!DOCTYPE html>
    <html>
    <head>
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        h2 {
          color: #007BFF;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        .message {
          background-color: #F9F9F9;
          padding: 10px;
          border-radius: 5px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
        }
        .footer p {
          font-size: 12px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <div class="message">
          <p><strong>Message:</strong></p>
          <p>${req.body.message}</p>
        </div>
        <p>Please respond to the user's inquiry as soon as possible.</p>
        <div class="footer">
          <p> Copyright © 2024 Turbocta, LTD, All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>`;
    let options = {
      email: `${req.body.email}`,
      subject: "New Contact Form Submission",
      html: htmlData,
    };
    await sendEmail(options);
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
});
app.post("/instructionEmail", async (req, res) => {
  try {
    let htmlData = `<!DOCTYPE html>
    <html>
    <head>
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        h2 {
          color: #007BFF;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        .message {
          background-color: #F9F9F9;
          padding: 10px;
          border-radius: 5px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
        }
        .footer p {
          font-size: 12px;
          color: #888;
        }
      </style>
    </head>
    <body>
    <div class="container">
    <h2>Instructions about beneficial ownership</h2>
    <div class="message">
      <p><strong>Instructions:</strong></p>
      <ul>
        <li>Ensure accurate reporting of beneficial owners.</li>
        <li>Provide detailed information about ownership percentages.</li>
        <li>Include any relevant changes in ownership structures.</li>
        <li>Verify and update beneficial ownership data regularly.</li>
      </ul>
    </div>
    <div class="footer">
      <p>Copyright © 2024 Turbocta, LTD, All rights reserved.</p>
    </div>
  </div>  
    </body>
    </html>`;
    console.log(req.body.email,'req.body.email')
    let options = {
      email: `${req.body.email}`,
      subject: "Instructions about beneficial ownership",
      html: htmlData,
    };
    await instructionEmail(options);
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
});
app.post("/subscribeEmail", async (req, res) => {
  try {
    let htmlData = `<!DOCTYPE html>
    <html>
    <head>
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        h2 {
          color: #007BFF;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        .message {
          background-color: #F9F9F9;
          padding: 10px;
          border-radius: 5px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
        }
        .footer p {
          font-size: 12px;
          color: #888;
        }
      </style>
    </head>
    <body>
    <div class="container">
    <h2>Corporate Transparency Act alerts and updates released by FinCEN</h2>
    <div class="message">
    <p><strong>Updates:</strong></p>
    <ul>
      <li>Stay informed about Corporate Transparency Act alerts.</li>
      <li>Regularly check for updates released by FinCEN.</li>
      <li>Ensure compliance with new regulations and requirements.</li>
      <li>Implement necessary changes to beneficial ownership reporting processes.</li>
    </ul>
  </div>
    <div class="footer">
      <p>Copyright © 2024 Turbocta, LTD, All rights reserved.</p>
    </div>
  </div>  
    </body>
    </html>`;
    let options = {
      email: `${req.body.email}`,
      subject: "Alerts and updates released by FinCEN",
      html: htmlData,
    };
    await subscribeEmail(options);
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
});
app.post("/create-subscription", async (req, res) => {
  try {
    const { amountInCents, email, token, userId } = req.body;

    // Create a product
    const product = await stripe.products.create({
      name: "Turbocta",
      description: "Turbocta provides the facility of finance",
    });

    // Create a price for the product
    const price = await stripe.prices.create({
      unit_amount: amountInCents,
      currency: "usd",
      recurring: {
        interval: "month", // Change as needed
      },
      product: product.id,
    });

    // Create a customer
    const customer = await stripe.customers.create({
      email: email,
      source: token, // This token should come from your client-side Stripe.js integration
    });

    // Create a subscription using the customer and price
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
    });

    // Update the user document with subscription information
    await admin.firestore().collection("users").doc(userId).update({
      subscription: subscription,
    });

    // Send a success response
    res.json({
      success: true,
      message: "Your subscription successfully done!",
      subscription,
    });
  } catch (error) {
    // Send a failure response
    res.status(500).json({
      success: false,
      message: "Your subscription failed!",
      error: error.message,
    });
  }
});
exports.app = functions.https.onRequest(app);
