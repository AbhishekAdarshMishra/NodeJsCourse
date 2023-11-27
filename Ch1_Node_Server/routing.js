// app.js

const http = require("http");

// create server callback
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body><h1>splash page<h1><body>");
    res.write("</html>");
    res.end();
  } else if (url === "/file") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body><h1>File Page<h1><body>");
    res.write("</html>");
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body><h1>Default Page<h1><body>");
    res.write("</html>");
    res.end();
  }
});

// let it run to Listen req for server
server.listen(3000);
