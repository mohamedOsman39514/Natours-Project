const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // var transporter = nodemailer.createTransport({
  //   host: 'smtp.mailtrap.io',
  //   port: 2525,
  //   auth: {
  //     user: '4d634c8014ab22',
  //     pass: '65ce5bad9252c4'
  //   }
  // });

  // 2) Define the email options
  const mailOptions = {
    from: 'Hhhhh  <user1@moo.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // 3) Actually send the email
  await transporter
    .sendMail(mailOptions)
    .then(console.log('Done Ya Brooooo '))
    .catch(err => console.log(err));
};

module.exports = sendEmail;
