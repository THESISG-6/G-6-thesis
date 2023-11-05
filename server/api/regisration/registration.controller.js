const { hashPassword } = require('./../../utils/password')
const { RegistrationService } = require('./registration.service')

const { REGISTER } = RegistrationService

const Controller = {
  Register: async (req, res) => {
    const { password, ...payload } = req.body
    const avatar = req?.file?.filename

    if (!password) throw new Error('Password is required.')

    const hashedPassword = await hashPassword(password)

    const { accessToken } = await REGISTER({
      ...payload,
      hashedPassword,
      avatar,
    })

    res.json({
      accessToken,
    })
  },
}

module.exports = {
  Controller,
}
