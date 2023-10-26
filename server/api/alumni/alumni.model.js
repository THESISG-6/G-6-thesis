const { Router } = require("express");
const { db } = require("./../../configs/db");

const app = Router();

app.get("/", (req, res) => {
	const q = "SELECT * FROM alumnidata";
	db.query(q, (err, data) => {
		if (err) {
			console.error("Error fetching job :", err);
			return res.status(500).json(err);
		}
		return res.json(data);
	});
});

app.post("/", (req, res) => {
	const { aname, yeargrad, address, birthdate } = req.body; // Added 'description' here
	const q =
		"INSERT INTO alumnidata (`aname`, `yeargrad`, `address`, `birthdate`) VALUES (?, ?, ?, ?)";
	// Added 'descriptions' here
	const values = [aname, yeargrad, address, birthdate]; // Added 'description' here

	db.query(q, values, (err, data) => {
		if (err) {
			console.error("Error new Alumni:", err);
			return res.status(500).json(err);
		}
		return res.json("Alumni has been created successfully");
	});
});

// app.delete("/:id", (req, res) => {
// 	const alumniId = req.params.id;
// 	const q = "DELETE FROM alumnidata WHERE id = ?";

// 	db.query(q, [alumniId], (err, data) => {
// 		if (err) {
// 			console.error("Error deleting alumni:", err);
// 			return res.status(500).json(err);
// 		}
// 		return res.json("Alumni has been deleted successfully");
// 	});
// });

module.exports = {
	AlumniModel: app,
};
