const mysql2 = require("mysql2");

const db = mysql2.createConnection({
	host: "localhost",
	user: "root",
	password: "PMAsoon17*()",
	database: "alumni",
});

const dbConnect = () =>
	db.connect((err) => {
		if (err) {
			console.error("Error connecting to the database:", err);
		} else {
			console.log("Connected to the database");
		}
	});

module.exports = {
	db,
	dbConnect,
};
