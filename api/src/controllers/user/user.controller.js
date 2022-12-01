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
    isAdmin, //x def
  } = req.body;

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
        profileImage,
        isAdmin: password === process.env.PASS_ADMIN_SECRET || false, //si me me envian el password correcto se setea como admin sino siempre false
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
  const { id } = req.params;
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
      where: { id },
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
    res.status(200).send("User Successfully Updated");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

getUserDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetail = await User.findOne({ where: { id } });
    if (!userDetail) return res.status(400).send("User Not Found");
    return res.status(200).send(userDetail);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};

getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    if (!allUsers) return res.status(400).send("User Not Found");
    return res.status(200).send(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};
//LOGICAL ERASING
deleteUser = async (req, res) => {
  const { id } = req.params; // en realidad lo voy a recibir de req.userId cuando conecte el middleware
  try {
    const user = await User.findOne({
      where: { id },
    });
    await user.update({ isBanned: true });
    await user.save();
    res.status(200).send("User Succesfully Banned");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  createNewUser,
  updateUser,
  getUserDetail,
  getAllUsers,
  deleteUser,
};
