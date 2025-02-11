// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); 

// Initialize Express
const app = express();
const corsOptions = {
  origin: '*', // Allow all origins
  methods: 'GET,POST,OPTIONS', // Specify allowed methods
  allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Configure Nodemailer with environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, 
  port: process.env.EMAIL_PORT, 
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASSWORD, 
  },
});


app.post("/send-mail", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, 
    replyTo: email,
    to: process.env.EMAIL_USER, 
    subject: `${subject} - ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`, 
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
