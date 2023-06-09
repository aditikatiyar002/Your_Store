const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/buyer");
const registerStoreRouter = require("./routes/store");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);
app.use(registerStoreRouter);

module.exports = app;
