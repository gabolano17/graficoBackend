const express = require("express");
const cors = require("cors");
const balance = require("./routes/balance");
const db = require("./config/db");

const app = express();

const port = process.env.port || 7070;

app.use(cors());

app.use("/balance", balance);

db.sync()
.then(() => {
    console.log("Conexion a la BD exitosa!!!");
})
.catch((err) => console.error(err));

app.listen(port, () => {
  console.log("Server corriendo en el port", port);
});