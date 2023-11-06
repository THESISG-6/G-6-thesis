const { catchError, ErrorException } = require("../../utils/catch-error");

const { comparePassword } = require("../../utils/password");
const { AuthService } = require("./auth.service");

const AuthController = {
	LOGIN: async (req, res) => {
		try {
			const { email, password } = req.body;
			const registered = await AuthService.LOGIN({ email });

			/**
			 * Step 1
			 * Check if the email is correct or exist
			 */

			if (!registered) throw new ErrorException("Email not exist!");

			/**
			 * Step 2
			 * Check if the password is correct
			 */
			const isPasswordCorrect = await comparePassword(
				registered.password,
				password
			);

			if (!isPasswordCorrect)
				throw new ErrorException("Password is incorrect!");

			res
				.status(201)
				.send({ message: "Successfully Login!", data: registered });
		} catch (err) {
			catchError(err, res);
		}
	},
};

module.exports = {
	AuthController,
};
