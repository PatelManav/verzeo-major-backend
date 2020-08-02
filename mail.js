var nodemailer = require("nodemailer");

const sendMail = (email, subject, text, callback) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",
      pass: "yourpassword",
    },
  });
  var mailOptions = {
    from: email,
    to: "admin@gmail.com",
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = sendMail;
