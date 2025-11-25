/* Faulty Caclulator
Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
/*
let random = Math.random()
console.log(random)
let a = prompt('Enter First number : ')
let b = prompt('Enter Operation : ')
let c = prompt('Enter Second number : ')


if (random > 0.1){
    // correct evaluation
    if (b = '+') {console.log('Addition is ', a+c)}
    else if (b = '-') {console.log('substrac is ', a-c)}
    else if (b = '*') {console.log('multiply is ', a*c)}
    else if (b = '/') {console.log('division is ', a/c)}
}

else{
    // wrong evaluation
    if (b = '+') {console.log('Addition is ', a-c)}
    else if (b = '-') {console.log('substrac is ', a/c)}
    else if (b = '*') {console.log('multiply is ', a+c)}
    else if (b = '/') {console.log('division is ', a**c)}

}
*/
let random = Math.random();
console.log(random);
let a = parseFloat(prompt('Enter First number : '));
let b = prompt('Enter Operation : ');
let c =
 parseFloat(prompt('Enter Second number : '));

if (random > 0.1){
    // correct evaluation
    if (b === '+') {console.log('Addition is ', a + c);}
    else if (b === '-') {console.log('substraction is ', a - c);}
    else if (b === '*') {console.log('multiplication is ', a * c);}
    else if (b === '/') {console.log('division is ', a / c);}
}
else{
    // wrong evaluation
    if (b === '+') {console.log('Addition is ', a - c);}
    else if (b === '-') {console.log('substraction is ', a / c);}
    else if (b === '*') {console.log('multiplication is ', a + c);}
    else if (b === '/') {console.log('division is ', a ** c);}
}

    // console.log{'Addition is ', (a-b)}
    // console.log{'substrac is ', (a/b)}
    // console.log{'multiply is ', (a+b)}
    // console.log{'division is ', (a**b)}