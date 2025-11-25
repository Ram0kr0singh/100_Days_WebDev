console.log("This is promise");

let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("No random no. failed")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("ram")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("No random no. failed")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("ram 2")
        }, 1000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })

let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err)
})