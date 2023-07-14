// -- try acess replit.com and import from github this file

const http = require("http");
const door = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("NODE COURSE");
  res.end();
});

server.listen(door, () => {
  console.log("server running...");
});
