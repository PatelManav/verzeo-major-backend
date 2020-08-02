const express = require("express");
const sendmail = require("./mail");
const app = express();
const path = require("path");
const sendMail = require("./mail");
const { resolveSoa } = require("dns");
const PORT = 8080;

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.post("/email", (req, res) => {
  console.log("Data: ", req.body);
  const { subject, email, text } = req.body;
  sendMail(email, subject, text, (err, data) => {
    if (err) {
      res.status(500).json({ message: "interal error" });
    } else {
      res.json({ message: "Email sent!!" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log("server is starting on PORT", 8080);
});
