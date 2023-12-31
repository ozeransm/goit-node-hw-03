const sgMail = require('@sendgrid/mail');
const {SEND_GRID_API_KEY, EMAIL_SEND_GRID} = process.env;

sgMail.setApiKey(SEND_GRID_API_KEY);

const sendEmail = (email, verifyCode) => {
  console.log(verifyCode)
const msg = {
  to: email,
  from: EMAIL_SEND_GRID, // Use the email address or domain you verified above
  subject: 'Verify email',
  html: `<h3>Hello! click link for confirm you email <a target="_blank" href="http://www.localhost:3000/api/contacts/users/verify/${verifyCode}">Link</a> </h3>`,
};

sgMail
  .send(msg)
  .then(()=>{console.log("Email send")})
  .catch((err)=>console.log("Error", err));
}

module.exports = sendEmail;