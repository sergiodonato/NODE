// -- Creating Routes on the Server (no frameworks user)
// *Basic HTML needed*

const http = require("http");
const door = 3000;
const host = "127.0.0.1"; // standard : 'localhost:' or 127.0.0.1

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    res.write(
      "<h1>Welcome</h1><br><h2>Try putting '/' channel or '/' course at the end of the address!</h2>"
    );
  } else if (req.url == "/channel") {
    res.write(
      '<h1>To see youtube channel <a href="https://www.youtube.com/@cfbcursos">click here!</a></h1>'
    );
  } else if (req.url == "/course") {
    res.write(
      '<h1>To see youtube playlist <a href="https://www.youtube.com/playlist?list=PLx4x_zx8csUjFC41ev2qX5dnr-0ThpoXE">click here!</a></h1>'
    );
  }
  res.end();
});

server.listen(door, host, () => {
  console.log("server running...");
});
