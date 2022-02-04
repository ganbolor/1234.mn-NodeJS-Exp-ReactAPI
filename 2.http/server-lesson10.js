const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //console.log(req);
  //console.log(req.headers, req.url, req.method);
  const { headers, url, method } = req;

  res.setHeader("content-type", "text/html");

  console.log(`header =====>`, headers);
  console.log(`url =====> ${url}`);
  console.log(`method =====> ${method}`);

  if (url === "/") {
    fs.readFile("./src/index.html", "utf8", (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Server error 500</h1>");
        res.end();
      } else {
        res.statusCode = 200;
        res.write(data);
        res.end();
      }
    });
  } else if (url === "/favicon.ico") {
    res.statusCode = 200;
    res.end();
  } else if (url === "/login") {
    fs.readFile("./src/login.html", "utf8", (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Server error 500</h1>");
        res.end();
      } else {
        res.statusCode = 200;
        res.write(data);
        res.end();
      }
    });
  } else if (url === "/logincheck" && method === "POST") {
    res.statusCode = 200;
    //DATA ==> CHUNK1 ==> CHUNK2 ==> CHUNK3
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const passSection = parsedBody.split("&")[1];
      console.log("passSection ====> ", passSection);
      const pass = passSection.split("=")[1];
      console.log("pass ====> ", pass);

      if (pass === "pass123") {
        //login successful
        res.statusCode = 302;
        res.setHeader("Location", "/home");
        res.end();
      } else {
        res.statusCode = 302;
        res.setHeader("Location", "/error");
        res.end();
      }
    });
  } else if (url === "/home") {
    //error
    fs.readFile("./src/home.html", "utf8", (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Server error 500</h1>");
        res.end();
      } else {
        res.statusCode = 200;
        res.write(data);
        res.end();
      }
    });
  } else if (url === "/error") {
    //error
    fs.readFile("./src/error.html", "utf8", (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Server error 500</h1>");
        res.end();
      } else {
        res.statusCode = 200;
        res.write(data);
        res.end();
      }
    });
  } else {
    res.statusCode = 404;
    res.write("<h1>404 not found</h1>");
    res.end();
  }
});

server.listen(55555, () => {
  console.log("http сэрвэр 55555 порт дээр аслаа...");
});
