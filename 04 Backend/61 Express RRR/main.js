const express = require('express')
const { dirname } = require('path')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hey this is a get request");
    res.send('Hello World2!')
}).post('/', (req, res) => {
    console.log("Hey this is a post request");
    res.send('Hello World2 post!')
}).put('/', (req, res) => {
    console.log("Hey this is a put request");
    res.send('Hello World2 put!')
})

app.delete('/', (req, res) => {
    console.log("Hey this is a delete request");
    res.send('Hello World2 delete!')
})

app.get('/index', (req, res) => {
    console.log("Hey it's Index");
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req, res) => {
    console.log("Hey it's Index");
    res.json({a:1, b:2, c:3, d:"ram", name: ["kumar", "singh"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})