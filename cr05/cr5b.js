// -- FS(file system) module for handling files
// partB : make a 'txt' file and write inside him, using a server call
// appendFile: if the file does not exist it creates it, if it exists it attaches it to the file

const http = require('http')
const fs = require('fs')
const door = process.env.PORT

const server = http.createServer((req, res) => {
    fs.appendFile('test.txt', 'NODE COURSE - ZERO TO HERO!', (err) =>{
        if(err)throw err
        console.log('File Created!')
        res.end()
    })
})

server.listen(door || 3000, () => {console.log('server running...')})