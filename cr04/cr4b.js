// -- Creating Routes using Express:
// -- USING EXPRESS FRAMEWORK!

const express = require('express') // using express
const app = express()
const door = process.env.PORT // to using server door as default

app.get('/', (req, res) => {
    res.send('Welcome!!')
})

app.get('/channel', (req, res) =>{
    res.json({ channel: 'PINCHERS COURSE'})
})

app.listen(door || 3000, () => {console.log('server running...')})