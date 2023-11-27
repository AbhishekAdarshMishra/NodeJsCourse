// app.js

const http = require("http");

// create server callback
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body><h1>Hello from my Node server<h1><body>");
  res.write("</html>");
  res.end();
});

// let it run to Listen req for server
server.listen(3000);
