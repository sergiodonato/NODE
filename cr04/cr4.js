// -- Creating Routes using Express:
// *run code in terminal, INSIDE cr04 file* : npm install express --save

const http = require('http') // using NODE only
const door = process.env.PORT // to using server door as default


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end('NODE COURSE')
})

server.listen(door || 3000, () => {console.log('server running...')})