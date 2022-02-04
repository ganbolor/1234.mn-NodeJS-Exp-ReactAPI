const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);
  //console.log(req.headers, req.url, req.method);
  const { headers, url, method } = req;
  //console.log(`header =====> ${headers}`);
  console.log(`header =====>`, headers);
  console.log(`url =====> ${url}`);
  console.log(`method =====> ${method}`);

  res.setHeader("content-type", "text/plain");
  res.write("<h1>Welcome to NODEJS!!!</h1>");
  res.end();
});

server.listen(55555, () => {
  console.log("http сэрвэр 55555 порт дээр аслаа...");
});
