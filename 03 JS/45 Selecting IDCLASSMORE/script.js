console.log("RamKS");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "blue"

// // console.log(boxes[2]);

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "yellow";
// document.querySelector(".box").style.backgroundColor = "yellow";


// console.log(document.querySelectorAll(".box")); //Returns Html element
// NodeList(6) [div.box, div.box, div.box, div#redbox.box, div.box, div.box]
// 0:div.box
// 1:div.box
// 2:div.box
// 3:div#redbox.box
// 4:div.box
// 5:div.box
// length:6

// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "Cyan"
// })


// Matches
e = document.getElementsByTagName("div")
console.log(e);

console.log(e[4].matches("#redbox"));
console.log(e[2].matches("#redbox"));