const { User } = require("../../db");

verifyUser = async (req, res) => {
  const { confirmationCode } = req.params;
  const user = await User.findOne({ where: { confirmationCode } });
  try {
    if (!user) {
      return res.status(400).send("User Not found");
    }
    user.update({ status: "active" });
    await user.save();
    return res.status(200).send("User Successfully Registered");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = verifyUser;
