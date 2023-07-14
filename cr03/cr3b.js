// -- Creating Routes on the Server (no frameworks user)
// *Basic HTML needed*
// part B - the beginning of passing parameters to the request
// after the address type: /?name=pincher&course=Pincher+Assalt

const http = require("http");
const url = require("url");
const door = 3000;
const host = "127.0.0.1"; // standard : 'localhost:' or 127.0.0.1

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(req.url);
  const parameter = url.parse(req.url, true).query;
  res.write('<br/>' + parameter.name);
  res.write('<br/>' + parameter.course);
  res.end();
});

server.listen(door, host, () => {
  console.log("server running...");
});
