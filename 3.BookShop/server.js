//Үндсэн ажиллах сэрвэр
const express = require("express");
//Аппын тохиргоо уншигч
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

const morgan = require("morgan");
const rfs = require("rotating-file-stream"); // version 2.x
const logger = require("./middleware/logger");

const categoriesRoutes = require("./routes/categories");
//Аппын тохиргоог Process.env рүү ачааллах
dotenv.config({ path: "./config/config.env" });

const app = express();

//my middleware
app.use(logger);

// create a write stream (in append mode)
console.log(__dirname);
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

app.use(morgan("combined", { stream: accessLogStream }));
//morgan middleware
//https://github.com/expressjs/morgan

app.use("/api/v1/categories", categoriesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`http сэрвэр ${process.env.PORT} порт дээр аслаа...`);
});
