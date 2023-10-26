const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcrypt"); // Importing bcrypt
const path = require("path");

const app = express();

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "PMAsoon17*()",
  database: "alumni",
});

app.use(express.json());
app.use(cors({ origin: true }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
// Serve uploaded images as static files
app.use("/uploads", express.static("uploads"));

const axios = require("axios");

//Login

app.post("/alumni", (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

// Books Routes Example
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching books:", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
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

app.delete("/books/:id", (req, res) => {
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

// Database for event data
// Events Routes
app.get("/events", (req, res) => {
  const q = "SELECT * FROM eventdata";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching events:", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

app.post("/events", (req, res) => {
  const { title, stime, sdate, ptime, pdate } = req.body;
  const q =
    "INSERT INTO eventdata (`title`, `stime`, `sdate`, `ptime`, `pdate`) VALUES (?, ?, ?, ?, ?)";
  const values = [title, stime, sdate, ptime, pdate];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error("Error creating event:", err);
      return res.status(500).json(err);
    }
    return res.json("Event has been created successfully");
  });
});

app.delete("/events/:id", (req, res) => {
  const eventId = req.params.id;
  const q = "DELETE FROM eventdata WHERE id = ?";

  db.query(q, [eventId], (err, data) => {
    if (err) {
      console.error("Error deleting event:", err);
      return res.status(500).json(err);
    }
    return res.json("Event has been deleted successfully");
  });
});

// Database for news data
// news Routes

app.get("/news", (req, res) => {
  const q = "SELECT * FROM newsdata";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching news:", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

app.post("/news", (req, res) => {
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

app.delete("/news/:id", (req, res) => {
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

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

// Database for Job Opportunities Data
// Job Opportunities Routes
app.get("/jobopp", (req, res) => {
  const q = "SELECT * FROM joboppdata";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching job :", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

app.post("/jobopp", (req, res) => {
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

app.delete("/jobopp/:id", (req, res) => {
  const joboppId = req.params.id;
  const q = "DELETE FROM joboppdata WHERE id = ?";

  db.query(q, [joboppId], (err, data) => {
    if (err) {
      console.error("Error deleting jobs:", err);
      return res.status(500).json(err);
    }
    return res.json("Jobs has been deleted successfully");
  });
});

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// ...

app.post("/api/test", upload.single("image"), (req, res) => {
  const title = req.body.title;
  const img = req.file ? req.file.filename : null; // Change 'image' to 'img'
  const desc = req.body.desc;

  const sqlInsert = "INSERT INTO stories (title, img, `desc`) VALUES (?, ?, ?)"; // Update the column order

  db.query(sqlInsert, [title, img, desc], (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send("Request failed, error inserting data into the database.");
    } else {
      const imageUrl = `http://localhost:3001/uploads/${img}`; // Create the image URL
      res.status(200).json({ imageUrl }); // Send the URL back to the frontend
    }
  });
});

app.get("/api/test", (req, res) => {
  const sqlSelect = "SELECT * FROM stories";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching portfolio data.");
    } else {
      res.status(200).json(result);
    }
  });
});

// ...

// Database for Alumni Data
// Alumni Routes
app.get("/alumni", (req, res) => {
  const q = "SELECT * FROM alumnidata";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching job :", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

app.post("/alumni", (req, res) => {
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

app.delete("/alumni/:id", (req, res) => {
  const alumniId = req.params.id;
  const q = "DELETE FROM alumnidata WHERE id = ?";

  db.query(q, [alumniId], (err, data) => {
    if (err) {
      console.error("Error deleting alumni:", err);
      return res.status(500).json(err);
    }
    return res.json("Alumni has been deleted successfully");
  });
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

app.get("/", (req, res) => {
  res.json("Hello, this is the backend");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
