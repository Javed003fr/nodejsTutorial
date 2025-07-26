const http = require("http");
const { readFile, readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./2-express-tutorial/navbar-app/index.html");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>content not found!</h1>");
    res.end();
  }
});

server.listen(5000);

// next lesson will start from 009 HTTP - HTML FILE
