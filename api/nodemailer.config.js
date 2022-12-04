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
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3000/confirm/${confirmationCode}> Click here</a>
          </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports.sendPurchaseConfirmation = (name, email, newOrder) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Purchase Information",
      html: `<h2>Hello ${name}</h2>
          <p>Thank you for your purchase.</p>
          <h3>Purchase Information:</h3>
          <div>
          <p>Nº order: ${newOrder.id}</p>
          <p>Products</p>
          <p>${newOrder.products}</p>
          <p>Quantity of Products: ${newOrder.products_quantity}</p>
          <p>Total: ${newOrder.total}</p>
          <p>Status: ${newOrder.status}</p>
          </div>`,
    })
    .catch((err) => console.log(err));
};
