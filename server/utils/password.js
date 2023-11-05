const { hash } = require('bcrypt')

const SALT = 10

const hashPassword = async (password) => {
  try {
    return await hash(password, SALT)
  } catch (e) {
    throw e
  }
}

module.exports = {
  hashPassword,
}
