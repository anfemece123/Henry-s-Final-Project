const { User } = require("../../db");
const { Order } = require("../../db");
const { Cart } = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("../../../nodemailer.config");
let id = 1;
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
      const token = jwt.sign(
        { email, password },
        process.env.REGISTRATION_TOKEN_SECRET
      );
      const passwordHashed = await bcrypt.hash(password, 10 /* saltRounds */);
      await User.create({
        id,
        first_name,
        last_name,
        email,
        passwordHashed,
        phoneNumber,
        address,
        profileImage,
        isAdmin: password === process.env.PASS_ADMIN_SECRET || false, //si me me envian el password correcto se setea como admin sino siempre false
        isBanned: false,
        status: "pending",
        confirmationCode: token,
      });
      const newUser = await User.findOne({
        where: { email },
      });
      newUser.passwordHashed = password;
      nodemailer.sendConfirmationEmail(first_name, email, token);
      res.status(201).send(newUser);
      id++;
      return;
    }
    return res.status(400).send("User Already Exists");
  } catch (error) {
    console.error(error);
    return res.status(404).send(error);
  }
};

updateUser = async (req, res) => {
  const { id } = req.params;
  const fieldsToChange = req.body;
  const fieldsToUpdate = { ...fieldsToChange };

  if (!Object.entries(fieldsToUpdate).length)
    return res.status(400).send("Missing Data");

  if (Object.entries(fieldsToUpdate).length === 1) {
    try {
      const user = await User.findOne({
        where: { id },
      });
      if (fieldsToUpdate.hasOwnProperty("password")) {
        const passwordHashed = await bcrypt.hash(
          fieldsToUpdate.password,
          10 /* saltRounds */
        );
        await user.update({ passwordHashed });
        await user.save();
      } else {
        await user.update(fieldsToUpdate);
        await user.save();
      }
      res.status(200).send("User Successfully Updated");
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  try {
    const user = await User.findOne({
      where: { id },
    });
    if (fieldsToUpdate.hasOwnProperty("password")) {
      const passwordHashed = await bcrypt.hash(
        fieldsToUpdate.password,
        10 /* saltRounds */
      );
      fieldsToUpdate["passwordHashed"] = fieldsToUpdate["password"];
      fieldsToUpdate["passwordHashed"] = passwordHashed;
      await user.set(fieldsToUpdate);
      await user.save();
      res.status(200).send("User Successfully Updated");
    } else {
      await user.set(fieldsToUpdate);
      await user.save();
      res.status(200).send();
    }
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
    return res.status(404).send(error);
  }
};

getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll({ include: { all: true } });
    if (!allUsers) return res.status(400).send("User Not Found");
    return res.status(200).send(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};
//LOGICAL ERASING
deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
    });
    await user.update({ isBanned: true });
    await user.save();
    nodemailer.sendUserBannedEmail(user.first_name, user.last_name, user.email);
    res.status(200).send(id);
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
