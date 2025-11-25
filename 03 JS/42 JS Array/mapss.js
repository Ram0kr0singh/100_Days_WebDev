let arr = [1, 92, 3, 5, 88];
// let newarr =[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr);

let newarr = arr.map((e)=>{
    return e**2
})
console.log(newarr);

// filter

const greaterthenseven = e=>{
    if(e>7){
        return true
    }
    return false
}
// console.log(arr.filter(greaterthenseven));

// Reduce

let arr2 = [1,2,3,4,5,6]

const red = (a,b,c)=> {
    return a+b+c
}

console.log(arr2.reduce(red));

console.log(Array.from("Ram Kumar Singh"));
