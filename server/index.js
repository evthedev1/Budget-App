const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const csv = require("csvtojson");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../dist")));

// const routes = require("./routers/routers.js");

// app.use("/", routes);

let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
