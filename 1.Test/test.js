const fs = require("fs");
const request = require("request");
request(
  "https://nodejs.org/dist/latest-v16.x/docs/api/cluster.json",
  (error, response, body) => {
    console.log(body);
    fs.writeFileSync("./cluster.json", body);
  }
);
//fs.writeFileSync("./config.txt", "hello nodejs...");
