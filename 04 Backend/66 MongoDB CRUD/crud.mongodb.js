// CREATE 
use("crudDb")

// db.createCollection("course")

// db.course.insertOne({
//     name: "Ram",
//     price: 0,
//     title: "Free",
// })

// db.course.insertMany([
//     {
//         "name": "John",
//         "price": 2500,
//         "title": "Premium"
//     },
//     {
//         "name": "Alice",
//         "price": 1800,
//         "title": "Basic"
//     },
//     {
//         "name": "Michael",
//         "price": 3500,
//         "title": "Gold"
//     },
//     {
//         "name": "Emily",
//         "price": 2200,
//         "title": "Silver"
//     },
//     {
//         "name": "David",
//         "price": 2800,
//         "title": "Platinum"
//     },
//     {
//         "name": "Sophia",
//         "price": 2000,
//         "title": "Standard"
//     },
//     {
//         "name": "Daniel",
//         "price": 3200,
//         "title": "Premium Plus"
//     },
//     {
//         "name": "Emma",
//         "price": 2100,
//         "title": "Bronze"
//     },
//     {
//         "name": "Oliver",
//         "price": 2700,
//         "title": "VIP"
//     },
//     {
//         "name": "Isabella",
//         "price": 1900,
//         "title": "Elite"
//     }
// ])


// READ 

// let a = db.course.find({price:3200})
// console.log(a.toArray());

// let b = db.course.findOne({price:3200})
// console.log(b);

// UPDATE 
// db.course.updateMany(
//     {price: 0},
//     {$set:{price:8888}}
// )
// DELETE 

db.course.deleteOne({price:1800})

// https://www.mongodb.com/docs/manual/reference/operator/query/