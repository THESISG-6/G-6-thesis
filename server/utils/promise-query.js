const { db: connection } = require("./../configs/db");

/** <---- Query Transactional Methods ----> */
export const beginTransactions = () => connection.beginTransaction();
export const commitTransactions = () => connection.commit();
export const rollBackTransactions = () => connection.rollback();

/** <------ Promise Query -------> */
export const PromiseQuery = async ({ query, values }) => {
	return await new Promise((ressolve, reject) => {
		try {
			connection.query(query, values, (err, res) => {
				if (err) return reject(err);
				ressolve(res);
			});
		} catch (err) {
			reject(err);
		}
	});
};