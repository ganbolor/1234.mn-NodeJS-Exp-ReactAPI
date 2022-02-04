const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);
  //console.log(req.headers, req.url, req.method);
  const { headers, url, method } = req;

  res.setHeader("content-type", "text/html");

  console.log(`header =====>`, headers);
  console.log(`url =====> ${url}`);
  console.log(`method =====> ${method}`);

  if (url === "/") {
    res.statusCode = 200;
    res.write("<h1>Manai delguurt tavtai moril</h1>");
    res.write(`<br><br> <a href="/login">Login</a>`);
    res.end();
  } else if (url === "/favicon.ico") {
  } else if (url === "/login") {
    res.statusCode = 200;
    res.write("<h1>Login</h1>");
    res.write(`<br>`);
    res.write(`<form action="/logincheck" method="POST">`);
    res.write(`<br> <input type="text" name="username">`);
    res.write(`<br> <input type="password" name="password">`);

    res.write(`<br> <input type="submit" name="submit" value="Login">`);

    res.write(`</form>`);
    res.end();
  } else if (url === "/home") {
    //login
  } else if (url === "/logincheck" && method === "POST") {
    res.statusCode = 200;
    res.write("<h1>Login success</h1>");

    res.write("<h2>METHOD= " + method + "</h2>");
    res.end();
  } else {
    res.statusCode = 404;
    res.write("<h1>404 not found</h1>");
    res.end();
  }
});

server.listen(55555, () => {
  console.log("http сэрвэр 55555 порт дээр аслаа...");
});
