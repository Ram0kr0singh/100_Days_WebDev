let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("Button was clicked")
    document.querySelector(".box").innerHTML = "<b>Yay i was clicked</b>"
})

let box_color = document.getElementsByClassName("box")

button.addEventListener("contextmenu", ()=>{
    document.querySelector(".box").style.background = "red"
} )

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})