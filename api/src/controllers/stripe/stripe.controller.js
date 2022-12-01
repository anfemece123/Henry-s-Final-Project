const { Stripe } = require("stripe");

// Esto es TERRIBLE PRACTICA, cambiar a una variable de entorno

const stripe = new Stripe(process.env.STRIPE_SECRET);

// 2 horas viendo pq me daba error, y en lugar de escribir Intents, escribi itents ☠

// checkout = async (req, res) => {
//   const { id, amount } = req.body;
//   try {
//     const payment = await stripe.paymentItents.create({
//       amount: amount,
//       currency: "USD",
//       description: "Esta es una descripcion del producto comprado o del pago",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log(payment);
//     return res.status(200).send({ message: "Pago realizado con exito" });
//   } catch (error) {
//     console.log(error);
//     return res.status(404).send({ message: error });
//   }
// };

checkout = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Esta es una descripcion del producto comprado o del pago",
      payment_method: id,
      confirm: true,
    });
    console.timeLog(payment);
    return res.status(200).send("Pago realizado con exito");
  } catch (error) {
    console.log({ "error.message": error });
    return res.status(404).send({ message: error });
  }
};

module.exports = checkout;
