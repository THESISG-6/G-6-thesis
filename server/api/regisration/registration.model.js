const { Router } = require("express");
const cors = require("cors");
const { Controller } = require("./registration.controller");

const app = Router();

app.use(cors());

app.post("/", Controller.Register);
app.put("/:id", Controller.Update);

module.exports = {
  RegistrationModel: app,
};
