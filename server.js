// Basics
const express = require("express");
const path = require("path");
const logger = require("morgan");
const multer = require("multer");
const favicon = require("serve-favicon");

const app = express();

/*--- Spot for database ---*/

require("dotenv").config();
require("./config/database");

const userRoutes = require("./routes/users");
const pokemonRoutes = require("./routes/api/pokemon");

/*--- Spot for Basic Routes ---*/

app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
app.use("/api/users", userRoutes);
app.use(require("./config/auth"));

/*--- Spot for api routes ---*/

app.use("/api/pokemon", pokemonRoutes);

/*--- Spot for catch all route ---*/

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// set up listen on different port
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
