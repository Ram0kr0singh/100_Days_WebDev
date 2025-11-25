const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const { request } = require('https')

// app.use(express.static("public"))

// middleware 1
app.use((req, res, next) => {
    // console.log(request.headers)
    // request.ram = "I am Ram bhai";
    fs.appendFileSync("ram2.txt", `${Date.now()} is a ${request.method}\n`)
    console.log(`${Date.now()} is a ${request.method}`);
    // res.send("Hacked by M1")
    next()
})

// middleware 2
// app.use((req, res, next) => {
//     console.log('m2')
//     next()
// })

// app.get('/about', (req, res) => {
//     res.send('Hello World about!' + request.ram)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})