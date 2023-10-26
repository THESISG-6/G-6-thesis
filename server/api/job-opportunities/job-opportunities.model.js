const { Router } = require("express");
const { db } = require("./../../configs/db");

const app = Router();

app.get("/", (req, res) => {
	const q = "SELECT * FROM joboppdata";
	db.query(q, (err, data) => {
		if (err) {
			console.error("Error fetching job :", err);
			return res.status(500).json(err);
		}
		return res.json(data);
	});
});

app.post("/", (req, res) => {
	const { title, ptime, pdate, description, link, requirement } = req.body; // Added 'description' here
	const q =
		"INSERT INTO joboppdata (`title`, `ptime`, `pdate`, `description`, `link`, `requirement`) VALUES (?, ?, ?, ?, ?, ?)";
	// Added 'descriptions' here
	const values = [title, ptime, pdate, description, link, requirement]; // Added 'description' here

	db.query(q, values, (err, data) => {
		if (err) {
			console.error("Error creating jobs:", err);
			return res.status(500).json(err);
		}
		return res.json("Jobs has been created successfully");
	});
});

// app.delete("/:id", (req, res) => {
// 	const joboppId = req.params.id;
// 	const q = "DELETE FROM joboppdata WHERE id = ?";

// 	db.query(q, [joboppId], (err, data) => {
// 		if (err) {
// 			console.error("Error deleting jobs:", err);
// 			return res.status(500).json(err);
// 		}
// 		return res.json("Jobs has been deleted successfully");
// 	});
// });

module.exports = {
	JobOpportunitiesModel: app,
};
