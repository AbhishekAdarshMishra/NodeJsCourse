const http = require("http");

// create server callback
const server = http.createServer((req, res) => {
  console.log(req);
});

// let it run to Listen req for server
server.listen(3000);
