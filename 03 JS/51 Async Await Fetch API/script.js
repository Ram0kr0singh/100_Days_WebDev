// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(500)
//         }, 3500);
//     })
// }

// async function main() {
//         console.log("Loading something");

//         console.log("Loading something 2");

//         console.log("Load data");

//         let data = await getdata()

//         console.log(data);

//         console.log("process data");

//         console.log("tast 2");
//     }

// main()


async function getdata2() {
        let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data2 = await x.json()
        return data2
    }

async function main2() {
        console.log("2Loading something");

        console.log("2Loading something 2");

        console.log("2Load data");

        let data22 = await getdata2()
        console.log(data22);
        console.log("2process data");

        console.log("2last 2");
    }
main2()
// data.then((v) =>{
// console.log(data);

// console.log("process data");

// console.log("tast 2");

// })