const { Router } = require('express')
const { Controller } = require('./registration.controller')

const app = Router()

app.post('/', Controller.Register)

module.exports = {
  RegistrationModel: app,
}
