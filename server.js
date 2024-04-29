const express = require("express");
const cors = require("cors");
const router = express.Router();
const nodemailer = require("nodemailer");

const app = express();

app.use(cors()); // Using CORS middleware for all routes
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/", router);

const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail as the email service
  auth: {
    user: "pedram.jarahzadeh@gmail.com", // Your Gmail address
    pass: "wrap qszm bhkq pitc ", // Your Gmail password
  },
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "pedram.jarahzadeh@gmail.com",
    subject: "Contact Form Submission - Personal Website",
    html: `<p> Name: ${name}</p>
           <p> Email: ${email}</p>
           <p> Phone: ${phone}</p>
           <p> Message: ${message}</p>`,
  };
  transporter.sendMail(mail, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send("Failed to send email");
    } else {
      console.log(info);
      res.status(200).send("Email sent successfully");
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
