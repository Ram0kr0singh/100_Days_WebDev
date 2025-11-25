use('sigmadb');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([{
    "name": "Python Programming Book",
    "price": 25.99,
    "student": "Emily Johnson"
},
{
    "name": "Wireless Headphones",
    "price": 49.99,
    "student": "David Smith"
},
{
    "name": "Gaming Mouse",
    "price": 39.95,
    "student": "Sophia Rodriguez"
},
{
    "name": "Coffee Maker",
    "price": 79.99,
    "student": "Michael Chen"
},
{
    "name": "Fitness Tracker",
    "price": 89.99,
    "student": "Olivia Brown"
},
{
    "name": "Smartphone Case",
    "price": 15.50,
    "student": "Daniel Lee"
},
{
    "name": "Bluetooth Speaker",
    "price": 59.95,
    "student": "Emma Martinez"
},
{
    "name": "Laptop Cooling Pad",
    "price": 29.99,
    "student": "Aiden Taylor"
},
{
    "name": "Yoga Mat",
    "price": 20.00,
    "student": "Ava Wilson"
},
{
    "name": "External Hard Drive",
    "price": 89.99,
    "student": "Noah Anderson"
}]);
console.log(`Done inserting data`);
