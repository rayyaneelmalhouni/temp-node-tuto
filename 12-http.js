const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Welcome to our about page");
  } else {
    res.end(`
    <h1>OOPS!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Go Back to our home</a>
    `);
  }
});

server.listen(5000);
