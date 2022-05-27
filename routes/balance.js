const ruta = require("express").Router();
const Balance = require("../models/Balance");

ruta.get("/", (req, res) => {
  Balance.findAll().then((result) => res.json(result));
});

module.exports = ruta;
