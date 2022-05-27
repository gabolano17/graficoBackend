const { Sequelize } = require("sequelize");

const db = new Sequelize("estadisticas", "root", "Mariobrosx2021", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
