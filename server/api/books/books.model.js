const { Router } = require("express");
const { db } = require("./../../configs/db");

const app = Router();

app.get("/", (req, res) => {
	const q = "SELECT * FROM books";
	db.query(q, (err, data) => {
		if (err) {
			console.error("Error fetching books:", err);
			return res.status(500).json(err);
		}
		return res.json(data);
	});
});

app.post("/", (req, res) => {
	const { title, desc, cover } = req.body;
	const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?, ?, ?)";
	const values = [title, desc, cover];

	db.query(q, values, (err, data) => {
		if (err) {
			console.error("Error creating book:", err);
			return res.status(500).json(err);
		}
		return res.json("Book has been created successfully");
	});
});

app.delete("/:id", (req, res) => {
	const bookId = req.params.id;
	const q = "DELETE FROM books WHERE id = ?";

	db.query(q, [bookId], (err, data) => {
		if (err) {
			console.error("Error deleting book:", err);
			return res.status(500).json(err);
		}
		return res.json("Book has been deleted successfully");
	});
});

module.exports = {
	BooksModel: app,
};
