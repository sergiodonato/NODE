// -- FS(file system) module for handling files

const http = require('http')
const fs = require('fs')
const door = process.env.PORT

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, file) =>{
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.write(file)
        return res.end()
    })
})

server.listen(door || 3000, () => {console.log('server running...')})