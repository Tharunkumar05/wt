const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/loginform");
const contactSchema = new mongoose.Schema({
  email: String,
  pwd: String,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});
app.post("/", function (req, res) {
  var Email = req.body.email;
  var psw = req.body.pwd;
  const login = mongoose.model("login", contactSchema);
  const contact = new login({
    email: Email,
    pwd: psw,
  });
  contact.save();
  console.log("success fully saved");
});

app.listen(5500);