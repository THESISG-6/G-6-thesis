const { PromiseQuery } = require("../../utils/promise-query");

const RegistrationService = {
	CREATE: async (values) => {
		try {
			const query = `INSERT INTO registration () VALUES ()`;
			const registration = await PromiseQuery({
				query,
				values,
			});
			return registration;
		} catch (err) {
			return err;
		}
	},
};

export default RegistrationService;
