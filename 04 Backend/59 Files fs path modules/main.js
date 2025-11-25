const { error } = require("console");
const fs = require("fs")

console.log("starting");

fs.writeFile("Ram2.txt", "Ram is a good boy", ()=>{
    console.log("done");
    fs.readFile("Ram2.txt", (error,data)=>{
        console.log(error,data.toString());
    })
})

fs.appendFile("Ram2.txt", " May be a good boy", (e,d)=>{
    console.log(d);
})
console.log("end");
