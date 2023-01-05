const express = require("express");
require("dotenv").config();
const app = express();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 6000;

const usersRoute = require("./routes/usersRoute");

app.use("/api/users", usersRoute);

app.use(
  express.json({
    limit: "50mb",
  })
);

const server = require("http").createServer(app);

server.listen(port, () => console.log(`Server running on port ${port}`));
