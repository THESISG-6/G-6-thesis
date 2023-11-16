const { Router } = require('express')
const { Controller } = require('./registration.controller')
const { RegistrationService } = require('./registration.service');

const app = Router()

app.post('/', Controller.Register)
app.get('/', async (req, res) => {
  try {
    const registrations = await RegistrationService.getAllRegistrations();
    res.json(registrations);
  } catch (error) {
    console.error("Error:", error);
    res.sendStatus(500);
  }
});

module.exports = {
  RegistrationModel: app,
}
