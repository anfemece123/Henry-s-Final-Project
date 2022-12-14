const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const { User } = require("../../db");
const { Cart } = require("../../db");
const { TOKEN_SECRET } = process.env;

logInUser = async (req, res) => {
  const { email, password } = req.body;
  // valido todos los datos recibidos
  if (!email || !password) {
    return res.status(400).send("Missing Data");
  }
  //aca ya tengo todos los datos
  //me fijo si existe el usuario
  try {
    //solo chequeo el email porque es unique, con eso me alcanza
    const userAux = await User.findOne({
      where: { email },
    });
    if (!userAux)
      return res
        .status(401 /* Unauthorized */)
        .send("Username Or Password Wrong");
    //aca tengo usuario, solo me falta verificar la contraseña
    const passwordCorrect = await bcrypt.compare(
      password,
      userAux.passwordHashed
    );
    if (!passwordCorrect)
      return res
        .status(401 /* Unauthorized */)
        .send("Username Or Password Wrong");
    if (userAux.isBanned)
      return res
        .status(403 /* Forbidden */)
        .send("Your Account Is Banned, Contact With The Company");
    if (userAux.status != "active") {
      return res.status(401).send("Pending Account. Please Verify Your Email!");
    }
    //aca tengo email y password correctos
    const userForToken = {
      id: userAux.id,
      email,
      password,
      isAdmin: userAux.isAdmin,
    };
    const token = jwt.sign(userForToken, TOKEN_SECRET, {
      expiresIn: 60 * 60 * 24 * 30, //que se tenga que loguear cada 30 dias
    });
    const loggedUser = {
      id: userAux.id,
      first_name: userAux.first_name,
      last_name: userAux.last_name,
      address: userAux.address,
      email: userAux.email,
      phoneNumber: userAux.phoneNumber,
      address: userAux.address,
      profileImage: userAux.profileImage,
      isAdmin: userAux.isAdmin,
      token,
    };
    const id = userAux.id;
    const cart = await Cart.findOne({ where: { id } });
    if (cart) console.log("cart:", cart.dataValues);

    return res.status(200).send([loggedUser, cart]);
  } catch (error) {
    return res.status(404).send(error);
  }
};

logInGoogle = async (req, res) => {
  const { credentials } = req.body;

  // valido todos los datos recibidos
  if (!credentials) {
    return res.status(400).send("Wrong Credentials");
  }
  const userAux = jwt_decode(credentials);
  const password = userAux.jti;
  const passwordHashed = await bcrypt.hash(password, 10 /* saltRounds */);

  let email = "";
  let googleUser = {};
  try {
    email = userAux.email;
    googleUser = await User.findOne({
      where: { email },
    });
    if (googleUser && googleUser.isBanned) {
      return res
        .status(403 /* Forbidden */)
        .send("Your Account Is Banned, Contact With The Company");
    }
  } catch (error) {
    console.log(error.message);
    return res.status(404).send(error.message);
  }

  try {
    const [gUser, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        first_name: userAux.given_name,
        last_name: userAux.family_name,
        email: userAux.email,
        passwordHashed,
        phoneNumber: "Not Found",
        address: "Not Found",
        profileImage: userAux.picture,
        isAdmin: password === process.env.PASS_ADMIN_SECRET || false, //si me me envian el password correcto se setea como admin sino siempre false
        isBanned: false,
        status: "active",
        confirmationCode: userAux.jti,
      },
    });

    console.log("created: ", created);
    console.log("gUser despues de findOrCreate: ", gUser);

    const userForToken = {
      id: gUser.id,
      email: gUser.email,
      password,
      isAdmin: gUser.isAdmin,
    };

    const token = jwt.sign(userForToken, TOKEN_SECRET, {
      expiresIn: 60 * 60 * 24 * 30, //que se tenga que loguear cada 30 dias
    });
    const loggedUser = {
      id: gUser.id,
      first_name: gUser.first_name,
      last_name: gUser.last_name,
      address: gUser.address,
      email: gUser.email,
      phoneNumber: gUser.phoneNumber,
      address: gUser.address,
      profileImage: gUser.profileImage,
      isAdmin: gUser.isAdmin,
      token,
    };
    const id = gUser.id;
    const cart = await Cart.findOne({ where: { id } });
    console.log("id :", id);
    console.log("type of id :", typeof id);
    console.log("cart: ", cart);
    return res.status(200).send([loggedUser, cart]);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = { logInUser, logInGoogle };
