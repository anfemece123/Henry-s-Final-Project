const nodemailer = require("nodemailer");

const user = process.env.USER_NODEMAILER;
const pass = process.env.PASSWORD_NODEMAILER;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user,
    pass,
  },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<!DOCTYPE html>
      <html lang="en"> 
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
      .email-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      </style>
      </head>
      <body>
        <div class="email-container">
          <h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3000/confirm/${confirmationCode}> Click here</a>
          <p>TIENDA NUESTRA.</p>
        </div>
      </body>    
      </html>`,
    })
    .catch((err) => console.log(err));
};

module.exports.sendPurchaseConfirmation = (name, email, newOrder) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Purchase Information",
      html: `<p>${name}, Thank you for your purchase.</p>
          <h3>Purchase Summary:</h3>
          <div>
          <p>Nº Order: ${newOrder.id}</p>
          <p>Quantity of Products: ${newOrder.products_quantity}</p>
          <p>You Paid Off: $ ${newOrder.total}</p>
          <p>Status: ${newOrder.status}</p>
          <p>Kind Regards,</p>
          <p>TIENDA NUESTRA.</p>
          </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports.sendUserBannedEmail = (name, lastName, email) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Banned Account",
      html: `<h2>Hello ${name}</h2>
          <p>Hello ${name} ${lastName},</p>
          <h3>We regret to inform you that your account has been banned.</h3>
          <p>Please contact to ${user} to recover your account.</p>
          <p>Kind Regards,</p>
          <p>TIENDA NUESTRA.</p>
          `,
    })
    .catch((err) => console.log(err));
};

{
  /* <p>Products</p>
<p>${newOrder.products}</p> */
}

{
  /* <div>
      <h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3000/confirm/${confirmationCode}> Click here</a>
          <p>TIENDA NUESTRA.</p>
</div> */
}
