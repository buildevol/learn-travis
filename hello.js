/*jshint esversion: 6 */

const http = require("http");
const PORT = proess.env.PORT;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Travis!\n")
  })
  .listen(PORT, "127.0.0.1");

console.log(`Server running at http://127.0.0.1:${PORT}`);
