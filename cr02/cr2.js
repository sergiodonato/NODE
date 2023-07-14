// -- Creating a simple server

const http = require("http");

http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write('To see a summary of http response types, go to: https://http.cat/\n')
  response.end()
}).listen(1337);
