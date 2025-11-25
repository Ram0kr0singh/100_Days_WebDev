// Factorial using reduce & For loop

let a = 6
 
// Reduce


function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    return c
}
console.log(factorial(a));


//For loop

function facfor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index

    }
    return fac
}
console.log(facfor(a))