async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c) {
    return a+b+c
}
// let a = await sleep()
// console.log(a);     //await is only valid in async functions and the top level bodies of modules
// let b = await sleep()
// console.log(b);

// IIFE Imediantely Invoke Function Expression **********
(async function main() {
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    // let [x, y, ...rest] = [1, 2, 5, 7, 8, 9 ,0]
    // console.log(x, y, rest);       //Destructuring*****************

    // let obj = {
    //     name2 : "ram",
    //     class2 : "3year"
    // }

    // let {name2,class2} = obj
    // console.log(name2, class2);

    let arr = [1,2,3]
    console.log(arr[0]+arr[1]+arr[2]);
    console.log(sum(...arr));  // ...  spread operator
})()