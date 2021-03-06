const express = require("express");
const app = express();

require("dotenv").config();
require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
