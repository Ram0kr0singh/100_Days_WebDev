function createdCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewsstr
    if (views<1000) {
        viewsstr = views; 
    }
    else if (views>1000000) {
        viewsstr = views/1000000 + "M"; 
    }
    else{
        viewsstr = views/1000 + "K"; 
    }
    let html=`<div class="card">
    <div class="image">
        <img src="${thumbnail}">
        <div class="capsul">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewsstr} views . ${monthsOld} Months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createdCard('JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77', "RAM", 450000, 5, "45:38", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxR2Iy74ubFQvvf2uP0BepdJ_GNw")