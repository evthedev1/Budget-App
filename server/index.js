const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const routers = require("./routers/routers.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../dist")));
app.use("/", routers);

// const routes = require("./routers/routers.js");

// app.use("/", routes);

let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
