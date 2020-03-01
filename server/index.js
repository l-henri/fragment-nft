require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/fragment", express.static(path.join(__dirname, "fragments")));

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
