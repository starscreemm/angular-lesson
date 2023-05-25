const http = require("http");

const secver = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to out homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }
  res.end("Some");
});

secver.listen(5000);
