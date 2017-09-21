// declare variables and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8080;

// Server setup using express
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('/css/style.css'));

require("./routing/apiRoutes.js")(app, path);
require("./routing/htmlRoutes.js")(app, path);
app.listen(PORT, () => {
    console.log("SERVER is listening on PORT: ", PORT);
})
