const { PromiseQuery } = require("../../utils/promise-query");
const { PrismaClient } = require("@prisma/client");
const { generateToken } = require("./../../utils/token");

const prisma = new PrismaClient();

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
      employment_status,
      current_job,
      year_current_job,
      jobDuration,
      position_current_job,
      employment_type,
      place_current_job,
      furtherStudies,
      enrollFurtherStudies,
      eligibility,
    } = payload;

    console.log("payload", payload);

    const avatarPath = `http://localhost:3001/uploads/${avatar}`;

    const createdData = await prisma.registration.create({
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
        Image: avatarPath,
        employment_status: employment_status,
        current_job: current_job,
        year_current_job: year_current_job,
        job_duration_after_grad: jobDuration,
        position_current_job: position_current_job,
        employment_type: employment_type,
        place_current_job: place_current_job,
        engage_studies: furtherStudies,
        enroll_studies: enrollFurtherStudies,
        eligibility: eligibility,
      },
    });

    if (!createdData)
      throw new Error(
        "There was a problem during registration, something went wrong."
      );

    const { password: createdPassword, ...tokenPayload } = createdData;

    const accessToken = generateToken({
      ...tokenPayload,
      avatar: avatarPath,
    });

    await prisma.registration.update({
      where: {
        id: createdData.id,
      },
      data: {
        token: accessToken,
      },
    });

    return {
      accessToken,
    };
  },
  UPDATE: async (payload) => {
    const {
      mobileNumber,
      currentAddress,
      avatar,
      employment_status,
      current_job,
      year_current_job,
      position_current_job,
      employment_type,
      place_current_job,
      furtherStudies,
      enrollFurtherStudies,
      eligibility,
    } = payload;

    console.log("payload", payload);

    // const avatarPath = `http://localhost:3001/uploads/${avatar}`;

    const updateData = await prisma.registration.updateMany({
      data: {
        phoneno: mobileNumber,
        address: currentAddress,
        ...(avatar && { Image: `http://localhost:3001/uploads/${avatar}` }),
        employment_status: employment_status,
        current_job: current_job,
        year_current_job: year_current_job,
        position_current_job: position_current_job,
        employment_type: employment_type,
        place_current_job: place_current_job,
        engage_studies: furtherStudies,
        enroll_studies: enrollFurtherStudies,
        eligibility: eligibility,
      },
    });

    if (!updateData) {
      throw new Error("Failed to update user data.");
    }

    const { ...tokenPayload } = updateData;
    const accessToken = generateToken({
      ...tokenPayload,
      avatar: avatar && `http://localhost:3001/uploads/${avatar}`,
    });
    await prisma.registration.updateMany({
      data: {
        token: accessToken,
      },
    });

    return {
      accessToken,
    };
  },
};

module.exports = {
  RegistrationService,
};
