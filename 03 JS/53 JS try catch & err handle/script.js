let a = prompt('1st number')
let b = prompt('2nd number')
// error handelling
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Write a number dumbass")
}
sum = parseInt(a) + parseInt(b)

// console.log(sum);
// error try catch
function main() {
    let x = 1
    try {
        console.log(`sum of ${a} & ${b} is ${sum * x}`);
        return true

    } catch (error) {
        console.log("Error aagya");
        return false
        // alert(error.name)
        // alert(error.message)  //x is not defined
        // alert(error.stack)
    }
    finally {
        console.log("Files are being closed"); //It will alawys run eben after return statement
    }
    console.log("This will not run");
}

let c = main()