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
  const { title, ptime, pdate, description, link } = req.body; // Remove 'status' from here
  const status = false; // Set the default status to 'false'
  const q =
    "INSERT INTO joboppdata (`title`, `ptime`, `pdate`, `description`, `link`, `status`) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [title, ptime, pdate, description, link, status];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error("Error creating jobs:", err);
      return res.status(500).json(err);
    }
    return res.json("Job has been created successfully");
  });
});
app.post("/adminjob", (req, res) => {
  const { title, ptime, pdate, description, link } = req.body; // Remove 'status' from here
  const status = true; // Set the default status to 'false'
  const q =
    "INSERT INTO joboppdata (`title`, `ptime`, `pdate`, `description`, `link`, `status`) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [title, ptime, pdate, description, link, status];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error("Error creating jobs:", err);
      return res.status(500).json(err);
    }
    return res.json("Job has been created successfully");
  });
});
app.get("/alumnijob", (req, res) => {
  // Modify the query to select only job opportunities with status = true
  const q = "SELECT * FROM joboppdata WHERE status = true";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching job opportunities:", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});
app.get("/falsejob", (req, res) => {
  // Modify the query to select only job opportunities with status = true
  const q = "SELECT * FROM joboppdata WHERE status = false";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching job opportunities:", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

app.put("/:id/jobstatus", (req, res) => {
  const id = req.params.id; // Assuming you have a unique identifier for each job, e.g., job ID
  const { status } = req.body;

  const q = "UPDATE joboppdata SET `status` = ? WHERE id = ?"; // Update the status for a specific job by its unique identifier
  db.query(q, [status, id], (err, data) => {
    if (err) {
      console.error("Error updating status:", err);
      return res.status(500).json(err);
    }
    return res.json("Status updated successfully");
  });
});
app.put("/jobopp/:id/status", (req, res) => {
  const id = req.params.id; // Assuming you have a unique identifier for each job, e.g., job ID

  const q = "UPDATE joboppdata SET `status` = false WHERE id = ?"; // Update the status for a specific job by its unique identifier
  db.query(q, [id], (err, data) => {
    if (err) {
      console.error("Error updating status:", err);
      return res.status(500).json(err);
    }
    return res.json("Status updated successfully");
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
