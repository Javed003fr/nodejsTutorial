const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

server.listen(4000, () => {
  console.log("Server is listining on port : 4000");
});
