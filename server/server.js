const express = require("express");
require("dotenv").config();
const app = express();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5001;

app.use(
  express.json({
    limit: "50mb",
  })
);

server.listen(port, () => console.log(`Server running on port ${port}`));
