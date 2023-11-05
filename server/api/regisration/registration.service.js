const { PromiseQuery } = require('../../utils/promise-query')
const { PrismaClient } = require('@prisma/client')
const { generateToken } = require('./../../utils/token')

const prisma = new PrismaClient()

const RegistrationService = {
  REGISTER: async (payload) => {
    const {
      firstName,
      lastName,
      middleName,
      mobileNumber,
      gender,
      currentAddress,
      dateOfBirth,
      yearGraduated,
      email,
      hashedPassword,
      avatar,
    } = payload

    const { password, ...tokenPayload } = payload

    const avatarPath = `http:localhost:3001/uploads/${avatar}`

    const accessToken = generateToken({
      ...tokenPayload,
      avatar: avatarPath,
    })

    await prisma.registration.create({
      data: {
        fname: firstName,
        lname: lastName,
        mname: middleName,
        phoneno: mobileNumber,
        gender,
        address: currentAddress,
        bday: dateOfBirth,
        yeargrad: yearGraduated,
        email,
        password: hashedPassword,
        image: avatarPath,
        token: accessToken,
      },
    })

    return {
      accessToken,
    }
  },
  CREATE: async (values) => {
    try {
      const query = `INSERT INTO registration () VALUES ()`
      const registration = await PromiseQuery({
        query,
        values,
      })
      return registration
    } catch (err) {
      return err
    }
  },
}

module.exports = {
  RegistrationService,
}
