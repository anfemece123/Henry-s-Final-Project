const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "not specified",
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM("autumn", "spring", "summer", "winter"),
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      isOnSale: {
        //en descuento por estar fuera de temporada o por ser liquidacion
        type: DataTypes.BOOLEAN,
        allowNull: false, //por si no pone que esta en descuento
        defaultValue: false,
      },
      size: {
        type: DataTypes.ENUM("XS", "S", "M", "L", "XL"),
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("female", "male", "other"),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true, //interesa saber cuando se creo
    }
  );
};
