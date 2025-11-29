// console.log("Hi")
// console.log('Whi si this?')
// var a = prompt("Enter an age")
// let a = age
// If you're running this in Node, prompt() will crash because it's a browser function.

const prompt = require("prompt-sync")();
// npm install prompt-sync
var a = prompt("Enter a number ");
console.log("your number is" + a);

let age = Number(a);
if (age < 18) {
    console.log("you can drive");
}
else if (age >= 100) {
    console.log("Stop joking");
}
else {
    console.log("YOU CAN'T DRIVE");
}

a = 3
b = 4

let c = a > b ? (a - b) : (a + b);
let d = a < b ? (a - b) : (a + b);