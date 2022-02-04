const http = require("http");
const fs = require("fs");
const urlLib = require("url");
const path = require("path");

function httpLog(url) {
  console.log("=====>" + url);
}

const server = http.createServer((req, res) => {
  //console.log(req);
  //console.log(req.headers, req.url, req.method);
  const { headers, url, method } = req;

  res.setHeader("content-type", "text/html");

  //   console.log(`header =====>`, headers);
  //   console.log(`url =====> ${url}`);
  //   console.log(`method =====> ${method}`);

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
    //} else if (url === "/src/img/iphone-x.jpg") {
  } else if (
    url.endsWith(".jpg") ||
    url.endsWith(".jpeg") ||
    url.endsWith(".png")
  ) {
    const parsed = urlLib.parse(url);
    const fileName = path.basename(parsed.pathname);

    console.log("image filename =======>" + fileName);

    fs.readFile("./src/img/" + fileName, (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Server error 500</h1>");
        res.end();
      } else {
        res.setHeader("content-type", "image/jpg");
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (url.endsWith(".pdf")) {
    const parsed = urlLib.parse(url);
    const fileName = path.basename(parsed.pathname);

    console.log("pdf filename =======>" + fileName);

    fs.readFile("./src/pdf/" + fileName, (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Server error 500</h1>");
        res.end();
      } else {
        res.setHeader("content-type", "application/pdf");
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (url.endsWith(".css")) {
    const parsed = urlLib.parse(url);
    const fileName = path.basename(parsed.pathname);

    console.log("css filename =======>" + fileName);

    fs.readFile("./src/css/" + fileName, (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Server error 500</h1>");
        res.end();
      } else {
        res.setHeader("content-type", "text/css");
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (url.endsWith(".js")) {
    const parsed = urlLib.parse(url);
    const fileName = path.basename(parsed.pathname);

    console.log("js filename =======>" + fileName);

    fs.readFile("./src/js/" + fileName, (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Server error 500</h1>");
        res.end();
      } else {
        res.setHeader("content-type", "text/javascript");
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.write("<h1>404 not found</h1>");
    console.log("404 URL =======>" + url);
    res.end();
  }
});

server.listen(55555, () => {
  console.log("http сэрвэр 55555 порт дээр аслаа...");
});
