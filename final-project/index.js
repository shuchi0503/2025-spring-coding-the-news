document.addEventListener('DOMContentLoaded', function() {
    const boroDropdown = document.getElementById('boroDropdown');
    const emtypeDropdown = document.getElementById('emtypeDropdown');
    const boroContentContainer = document.getElementById('boro-content');

    const boroCards = [
        {
            boro: "Manhattan",
            type: "EMS",
            text: "In 2025, from January to March, it took ambulances and fire units in Manhattan an average of 11 minutes to arrive at life-threatening medical emergencies."
        },
        {
            boro: "Brooklyn",
            type: "EMS",
            text: "In Brooklyn, EMS units arrived in about 9.5 minutes on average for emergencies."
        },
        {
            boro: "Manhattan",
            type: "FDNY",
            text: "Fire units in Manhattan had an average response time of 5.5 minutes in early 2025."
        }
    ];

    function updateContent() {
        const selectedBoro = boroDropdown.value;
        const selectedType = emtypeDropdown.value;

        boroContentContainer.innerHTML = ''; 

        if (selectedBoro && selectedType) {
            const filtered = boroCards.filter(card =>
                card.boro === selectedBoro && card.type === selectedType
            );

            if (filtered.length > 0) {
                filtered.forEach(function (card) {
                    const div = document.createElement('div');
                    div.classList.add('boroCard');
                    div.innerHTML = `<h2>${card.boro} - ${card.type}</h2><p>${card.text}</p>`;
                    boroContentContainer.appendChild(div);
                });
            }
        }
    }




    boroDropdown.addEventListener('change', updateContent);
    emtypeDropdown.addEventListener('change', updateContent);
});



















