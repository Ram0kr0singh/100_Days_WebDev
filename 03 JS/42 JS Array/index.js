// let arr = [1, 2, 7, "pop",]
// let arrr = ["yo", "ho"]
// let arrrr = ["dfhef", "wgdfvsf"]

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// arr[1] = 566
// console.log(arr);
// console.log(typeof arr);
// console.log(arr.length);

// console.log(arr.toString());
// console.log(arr.join(" and "));
// console.log(arr.pop());

// console.log(arr.push("harry",8,9,10));
// console.log(arr);

// console.log(arr.concat(arrr));
// console.log(arr.concat(arrr,arrrr));

// Loops

let a = [1, 92, 3, 5, 88]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// value index array Foreach

// a.forEach((value, index, arr)=> {
//     console.log(value, index, arr);
// });

// // forin

// obj = {
//     a:1,
//     b:2,
//     c:3,
// }
// console.log("forin");
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
//     }
// }

// forof Mainly for array

for (const value of a) {
    console.log(value);
}