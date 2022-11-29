const { User } = require("../../db");
const bcrypt = require("bcrypt");

createNewUser = async (req, res) => {
  //Recibe los datos recolectados desde el formulario controlado por body de la ruta de registro de usuario
  //Crea un usuario en la base de datos, esta relacionado con las actividades creadas por el mismo.
  const {
    first_name,
    last_name,
    email,
    password,
    phoneNumber,
    address,
    profileImage, //recibo imagen o letra inicial de su nombre y apellido
    isAdmin, //x def false
  } = req.body;
  // valido todos los datos recibidos para poder crear un usuario
  if (
    !first_name ||
    !last_name ||
    !email ||
    !password ||
    !phoneNumber ||
    !address
  ) {
    return res.status(400).send("Missing Data");
  }
  //aca ya tengo todos los datos y puedo intentar crear el usuario
  //antes de crear un usuario primero me fijo si ya existe
  try {
    //solo chequeo el username porque es unique, con eso me alcanza
    const userAux = await User.findOne({
      where: { email },
    });
    if (userAux === null) {
      const passwordHashed = await bcrypt.hash(password, 10 /* saltRounds */);
      await User.create({
        first_name,
        last_name,
        email,
        passwordHashed,
        phoneNumber,
        address,
        profileImage, //si no se envia nada, poner letra inicial de su nombre y apellido
        isAdmin,
        isBanned: false,
      });
      const newUser = await User.findOne({
        where: { email },
      });
      newUser.passwordHashed = password;
      return res.status(201).send(newUser);
    }
    return res.status(400).send("User Already Exists");
  } catch (error) {
    return res.status(404).send(error);
  }
};

updateUser = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    phoneNumber,
    address,
    profileImage,
    isAdmin,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !email ||
    !password ||
    !phoneNumber ||
    !address ||
    !profileImage ||
    !isAdmin
  ) {
    return res.status(400).send("Missing Data");
  }

  try {
    const user = await User.findOne({
      where: { email },
    });

    const passwordHashed = await bcrypt.hash(password, 10 /* saltRounds */);

    user.set({
      first_name,
      last_name,
      email,
      passwordHashed,
      phoneNumber,
      address,
      profileImage,
      isAdmin,
      isBanned: false,
    });
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = { createNewUser, updateUser };
