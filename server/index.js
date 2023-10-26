const express = require("express");
const { applyMiddlewares } = require("./middlewares");
const { dbConnect } = require("./configs/db");
<<<<<<< HEAD
const { watch } = require("./configs/db-watcher");
=======
const { routerMiddleware } = require("./middlewares/router");
>>>>>>> abfb1645d549320942ec323f3c4fde7ae27f2faa

const app = express();
applyMiddlewares(app);
routerMiddleware(app);

app.listen(3001, () => {
	Promise.resolve(dbConnect())
		.then(() => console.log("Server is running on port 3001"))
		.catch((e) => {
			console.error("Unable to connect to the database", e);
		});
});

watch().then(() => console.log("Watching events..."));
