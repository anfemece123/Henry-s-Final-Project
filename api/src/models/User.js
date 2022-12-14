const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      /* id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
      }, */
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      passwordHashed: {
        type: DataTypes.STRING, //va a estar hasheado para ir a db
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "active"),
        allowNull: false,
        default: "pending",
      },
      confirmationCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
