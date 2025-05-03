document.addEventListener('DOMContentLoaded', function() {

    // calling drop downs
    const boroDropdown = document.getElementById('boroDropdown');
    const emtypeDropdown = document.getElementById('emtypeDropdown');

    // calling content divs
    const boroContentContainer = document.getElementById('boro-content');
    const emtypeContentContainer = document.getElementById('emtype-content');

    boroDropdown.addEventListener('change', updateBoroContent);
    emtypeDropdown.addEventListener('change', updateEmtypeContent);

    const boroParas = boroContentContainer.querySelectorAll('.boro-para');

    // if / for loop here?


}













// started over above
let boroCards =
[
    {
        "Boro": "In 2025, from January to March, it took ambulances and fire units in Manhattan an average of 11 minutes to arrive at life threatening medical emergencies."
    }
]

cards.forEach(function(boroCard){
    let result = document.createElement('div');

    result.classList.add('boroCard')
    result.setAttribute('boro', card.Boro);

    boroCard.innerHTML = `<h2 class="boroDropdown">${card.Boro}</h2>`;