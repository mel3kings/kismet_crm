import {saveEvent} from "./event.controller";

const nodemailer = require('nodemailer');
const EMAIL_ROBOT = 'emailrobot705@gmail.com';
const SERVICE = 'gmail';
const PASSWORD = 'testing_1234';


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: SERVICE,
  auth: {
    user: EMAIL_ROBOT,
    pass: PASSWORD
  }
});

export function sendEmail(to = "meltatlonghari3@gmail.com", message = "Message not found") {
  console.log("received request to email");
  let mailOptions = {
    from: EMAIL_ROBOT,
    to: to,
    subject: "Email Reminder",
    text: message
  };
  saveEvent("Sending Email to :" + to);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      saveEvent(error);
      console.log(error);
    } else {
      saveEvent('Email sent: ' + info.response);
      console.log('Email sent: ' + info.response);
    }
  });
}



export function sendEmailAPI(req, res) {
  let recipient = req.body.to;
  let message = req.body.message;
  console.log("received request to email" + recipient);
  console.log("received request to email" + message);
  let mailOptions = {
    from: EMAIL_ROBOT,
    to: recipient,
    subject: "Email Reminder",
    text: message
  };
  saveEvent("Sending Email to :" + recipient);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      saveEvent(error);
      console.log(error);
    } else {
      saveEvent('Email sent: ' + info.response);
      console.log('Email sent: ' + info.response);
    }
  });
}
