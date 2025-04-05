document.getElementById("title").style.color = "red";

// document.getElementById("ridgewood").style.backgroundColor = "yellow";

// Select all divs with class card
const divs = document.querySelectorAll(".card");

// Loop through the 10 divs you want the same properties for
for (let i = divs.length - 10; i < divs.length; i++){
    divs[i].style.backgroundColor = "yellow";
    divs[i].style.borderColor = "red";
    divs[i].style.borderWidth = "3px";
    divs[i].style.borderStyle = "solid";
    // divs[1].style.width = "15%";
    // divs[1].style.padding = "15px";
}
// document.getElementByClassName("card").style.margin = "20px 16px 20px 16px";


document.getElementById("explainer").style.borderStyle = "dashed";
document.getElementById("explainer").style.borderWidth = "5px";
document.getElementById("explainer").style.fontSize = "15pt";

// Get the dropdown element
function myFunction(){
    document.getElementById("dropdown-content").classList.toggle("show");

// Function to filter the items in the dropdown based on user input
// function filterFunction(){
    
//   const input = document.getElementById("myInput");
//   const filter = input.value.toUpperCase();
//   const div = document.getElementById("dropdown-content");
//   const options = dropdown.getElementsByTagName("a");

//   for (let i = 0; i < options.length; i++) {
//     const txtValue = options[i].textContent || options[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         options[i].style.display = "";
//     } else {
//         options[i].style.display = "none";
//     }
//     }

 // Get the dropdown element
 let dropdown = document.getElementById('filterDropdown');

  //query select all card div elements
  let neighborhoods = document.querySelectorAll('div.card')

  // Add an event listener when the dropdown changes (the function inside this should include the filter value and the two for each loops below)
  dropdown.addEventListener('change', function(){
    let filterValue = this.value;

// Make a for each loop that goes through each <h2> element
neighborhoods.forEach(function(card) {
    //if the dropdown value equals the neighborhood of the cell, set the display to none
    let neighborhood = card.getAttribute('neighborhood') 

    if (neighborhood == filterValue) {
        card.style.display = 'none';
}
else {
    card.style.display = 'block';
}
}
  }