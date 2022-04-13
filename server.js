const http = require("http");
const port = 3001;
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hi I'm Back");
  })
  .listen(port);

console.log(`server running at http://127.0.0.1:${port}`);
