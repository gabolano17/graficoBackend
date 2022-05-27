const db = require("../config/db");
const { DataTypes } = require("sequelize");

const Balance = db.define(
  "balances",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    año: {
      type: DataTypes.INTEGER,
    },
    ventas: {
      type: DataTypes.INTEGER,
    },
    costos: {
      type: DataTypes.INTEGER,
    },
    utilidades: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    paranoid: true,
    underscored: true,
  }
);

module.exports = Balance;
