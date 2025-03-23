document.getElementById("title").style.color = "red";

// document.getElementById("ridgewood").style.backgroundColor = "yellow";

// Select all divs with class card
const divs = document.querySelectorAll(".card");

// Loop through the 4 divs you want the same properties for
for (let i = divs.length - 4; i < divs.length; i++){
    divs[i].style.backgroundColor = "yellow";
    divs[i].style.borderColor = "red";
}


document.getElementById("explainer").style.borderStyle = "dashed";
document.getElementById("explainer").style.borderWidth = "5px";
document.getElementById("explainer").style.fontSize = "15pt";

