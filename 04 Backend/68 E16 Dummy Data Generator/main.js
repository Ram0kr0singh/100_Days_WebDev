const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Employee = require('./models/Employee');

mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}
app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
});


app.get('/generate', async (req, res) => {
    // Clear the Collection 
    await Employee.deleteMany({})


    //generate 10 data
    let randomNames = ['Ram', 'Rohan', 'Manish', 'JC']
    let randomcities = ['Delhi', 'UP', 'bihar', 'J&K']
    let randomLang = ['Java', 'C++', 'Rust', 'JS']


    
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 20000),
            language: getRandom(randomLang),
            city: getRandom(randomcities),
            isManager: Math.random() > 0.5 ? true : false
        })
        console.log(e)
    }


    res.render('index', { foo: 'FOO' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})