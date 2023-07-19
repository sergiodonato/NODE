const http = require("http");
const event = require('events')
const EventMaker = new event.EventEmitter()

const final = () => {console.log('End of process')}

EventMaker.on('msg', () => {console.log('Node Course')})
EventMaker.on('end', final)

const door = process.env.PORT || 3000;

const starterMsg = () => {
  console.log("Server online!");
};

const server = http.createServer((req, res) => {
    EventMaker.emit('msg')
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('Node Course')
    EventMaker.emit('end')
    res.end()
});

server.listen(door, starterMsg);
