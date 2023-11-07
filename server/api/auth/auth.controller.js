const { catchError, ErrorException } = require("../../utils/catch-error");

const { comparePassword } = require("../../utils/password");
const { generateToken } = require("../../utils/token");
const { AuthService } = require("./auth.service");

const AuthController = {
  LOGIN: async (req, res) => {
    try {
      const { email, password: PASSWORD } = req.body;
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
        PASSWORD,
        registered.password
      );

      if (!isPasswordCorrect)
        throw new ErrorException("Password is incorrect!");

      // Generate Token
      const { password, token, ...payload } = registered;

      const generatedToken = generateToken(payload);

      res
        .status(201)
        .send({ message: "Successfully Login!", data: generatedToken });
    } catch (err) {
      catchError(err, res);
    }
  },
};

module.exports = {
  AuthController,
};
