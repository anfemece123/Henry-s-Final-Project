const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../db");
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
      return res.status(401).send({
        message: "Pending Account. Please Verify Your Email!",
      });
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
    return res.status(200).send(loggedUser);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = logInUser;
