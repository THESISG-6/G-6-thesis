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
			employment_Status,
			currentJob,
			year_current_Job,
			jobDuration,
			position_current_Job,
			EmploymentType,
			place_current_job,
			furtherStudies,
			enrollFurtherStudies,
		} = payload;

		const { password, ...tokenPayload } = payload;

		const avatarPath = `http://localhost:3001/uploads/${avatar}`;

		const accessToken = generateToken({
			...tokenPayload,
			avatar: avatarPath,
		});

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
				employment_status: employment_Status,
				current_job: currentJob,
				year_current_job: year_current_Job && parseInt(year_current_Job),
				job_duration_after_grad: jobDuration,
				position_current_job: position_current_Job,
				employment_type: EmploymentType,
				place_current_job: place_current_job,
				engage_studies: furtherStudies,
				enroll_studies: enrollFurtherStudies,
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
