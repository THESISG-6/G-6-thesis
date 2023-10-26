const { Router } = require("express");
const { db } = require("./../../configs/db");

const app = Router();

app.get("/", (req, res) => {
	const q = "SELECT * FROM newsdata";
	db.query(q, (err, data) => {
		if (err) {
			console.error("Error fetching news:", err);
			return res.status(500).json(err);
		}
		return res.json(data);
	});
});

app.post("/", (req, res) => {
	const { title, ptime, pdate, description } = req.body; // Added 'description' here
	const q =
		"INSERT INTO newsdata(`title`, `ptime`, `pdate`, `description`) VALUES (?, ?, ?, ?)";
	// Added 'descriptions' here
	const values = [title, ptime, pdate, description]; // Added 'description' here

	db.query(q, values, (err, data) => {
		if (err) {
			console.error("Error creating news:", err);
			return res.status(500).json(err);
		}
		return res.json("News has been created successfully");
	});
});

app.delete("/:id", (req, res) => {
	const newsId = req.params.id;
	const q = "DELETE FROM newsdata WHERE id = ?";

	db.query(q, [newsId], (err, data) => {
		if (err) {
			console.error("Error deleting news:", err);
			return res.status(500).json(err);
		}
		return res.json("News has been deleted successfully");
	});
});

module.exports = {
	NewsModel: app,
};
