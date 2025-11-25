// import fs from "fs/promises"

// let a = await fs.readFile("Ram2.txt")

// let b = await fs.appendFile("Ram2.txt", "\nThis\n\nmight be\n\n\namazing\n")

// console.log(a.toString(), b);


import path from "path"

let mypath = "C:\\Users\\ramku\\Documents\\CODING\\WEB-DEV\\Web Development\\04 Backend\\59 Files fs path modules\\ram.txt"
console.log(path.extname(mypath));
console.log(path.dirname(mypath));
console.log(path.basename(mypath));