//Үндсэн ажиллах сэрвэр
const express = require("express");
//Аппын тохиргоо уншигч
const dotenv = require("dotenv");

const categoriesRoutes = require("./routes/categories");
//Аппын тохиргоог Process.env рүү ачааллах
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/categories", categoriesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`http сэрвэр ${process.env.PORT} порт дээр аслаа...`);
});
