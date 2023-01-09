const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const route = require("./routes");

var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

app.use("/api", route);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Backend App listening on port ${port}!`));
