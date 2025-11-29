// function title(name) {
//     console.log(name + ' is good at such 1')
//     console.log(name + ' is good at such 2')
//     console.log(name + ' is good at such 3')
//     console.log(name + ' is good at such 4')
// }

// title("Ram")
// title("Zoro")

function sum(a, b, c=10) {
    return a + b + c
}

result1 = sum(1, 5)
result2 = sum(2, 5, 6)
result3 = sum(3, 5)

console.log(result1)
console.log(result2)
console.log(result3)