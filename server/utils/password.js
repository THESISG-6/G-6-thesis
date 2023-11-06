const { hash, compare } = require("bcrypt");

const SALT = 10;

const hashPassword = async (password) => {
	try {
		return await hash(password, SALT);
	} catch (e) {
		throw e;
	}
};

const comparePassword = async (dbPassword, userPassword) =>
	await compare(dbPassword, userPassword);

module.exports = {
	hashPassword,
	comparePassword,
};
