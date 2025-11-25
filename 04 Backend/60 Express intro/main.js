// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('<h1>Hey</h1>');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/blog', (req, res) => {
    res.send('Blog')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/contact us', (req, res) => {
    res.send('contact')
})

app.get('/learn/intro-to-js', (req, res) => {
    res.send('WLCM to JS')
})

app.get('/learn/intro-to-py', (req, res) => {
    res.send('WLCM to py')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})