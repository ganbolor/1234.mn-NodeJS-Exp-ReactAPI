//Үндсэн ажиллах сэрвэр
const express = require("express");
//Аппын тохиргоо уншигч
const dotenv = require("dotenv");

//вэб сэрвэр
const http = require("http");
//файл унших
const fs = require("fs");
//зам уншигч
const urlLib = require("url");
//файлын нэр шалгаж авах
const path = require("path");

//Аппын тохиргоог Process.env рүү ачааллах
dotenv.config({ path: "./config/config.env" });

const app = express();

function httpLog(url) {
  console.log("URL =====>" + url);
}

//route - чиглүүлэх
app.get("/", (req, res) => {
  //res.send("Hello from Express Server!");
  //res.send("<h1>Hello from Express Server!</h1>");
  /*
  res.send({
    message: "Hello from Express Server!",
    surgalt: "rest api backend",
  });
  */
  /*
  res.status(400).send({
    message: "Hello from Express Server!",
    surgalt: "rest api backend",
  });
  */
  res.status(200).json({
    myMethod: "GET",
    error: "Id is missing",
    message: "Hello from Express Server!",
    surgalt: "rest api backend",
  });
});

app.get("/api/v1/categories", (req, res) => {
  res.status(200).json({
    myMethod: "GET",
    data: "categories list",
  });
});

app.get("/api/v1/categories/:idCategory", (req, res) => {
  res.status(200).json({
    myMethod: "GET",
    data: `get info categories => ${req.params.idCategory} `,
  });
});
app.post("/api/v1/categories", (req, res) => {
  res.status(200).json({
    myMethod: "POST",
    data: "may be new add",
  });
});

app.put("/api/v1/categories/:idCategory", (req, res) => {
  res.status(200).json({
    myMethod: "PUT",
    data: `change categories => ${req.params.idCategory} `,
  });
});

app.delete("/api/v1/categories/:idCategory", (req, res) => {
  res.status(200).json({
    myMethod: "DELETE",
    data: `delete categories => ${req.params.idCategory} `,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`http сэрвэр ${process.env.PORT} порт дээр аслаа...`);
});

/*
const server = http.createServer((req, res) => {
  const { headers, url, method } = req;

  res.setHeader("content-type", "text/html");
  httpLog(url);

  if (url === "/") {
    fs.readFile("./src/index.html", "utf8", (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Server error 500</h1>");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });

        res.write(data);
        res.end();
      }
    });
  } else {
    res.statusCode = 404;
    res.write("<h1>404 not found</h1>");
    console.log("404 URL =======>" + url);
    res.end();
  }
});
*/
