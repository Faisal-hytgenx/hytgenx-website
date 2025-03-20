require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, companyName, description } =
    req.body;

  console.log("data", req.body);
  const MailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Email from HytGenX Website",
    html: `
    <h3>${firstName} ${lastName} sent an email to HytGenX</h3>
    <p><strong>Name:</strong> ${firstName} " " ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Company:</strong> ${companyName}</p>
  `,
  };

  transporter.sendMail(MailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
      return res.status(500).send({ message: "Error sending email", error });
    }
    console.log("Email sent:", info.response);
    res.status(200).send({ message: "Email sent successfully!", info });
  });
});

app.post("/apply-job", (req, res) => {
  const { firstName, lastName, email, phoneNumber, resumeLink, message } =
    req.body;

  console.log("Job Application Data:", req.body);
  const jobMailOptions = {
    from: process.env.Email_User,
    to: process.env.Email_User,
    subject: "New Job Application - HytGenX",
    html: `
      <h3>New Job Application</h3>
      <p><strong>Applicant Name:</strong> ${firstName + " " + lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Cover Letter:</strong></p>
      <p>${message}</p>
    `,
  };

  transporter.sendMail(jobMailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
      return res.status(500).send({ message: "Error sending email", error });
    }
    console.log("Job application email sent:", info.response);
    res
      .status(200)
      .send({ message: "Job application submitted successfully!", info });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
