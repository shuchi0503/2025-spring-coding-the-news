document.addEventListener('DOMContentLoaded', function() {
    const boroDropdown = document.getElementById('boroDropdown');
    const emtypeDropdown = document.getElementById('emtypeDropdown');
    const boroContentContainer = document.getElementById('boro-content');

    const boroCards = [
        {
            boro: "Manhattan",
            type: "EMS",
            text: "It takes ambulances in Manhattan an average of 11 minutes and 22 seconds to reach life threatening medical emergencies.In case of incidents such as cardiac arrest and choking, it takes an average 8 minutes and 52 seconds. Average response time for life-threatening and non-life-threatening incidents combined is 17 minutes and 38 seconds. Non-life-threatening emergencies include instances of drug overdose, sickness, pain etc."
        },
        {
            boro: "Brooklyn",
            type: "EMS",
            text: "It takes ambulances in Brooklyn an average of 10 minutes and 33 seconds to reach life threatening medical emergencies. In case of incidents such as cardiac arrest and choking, it takes an average 8 minutes and 48 seconds. Average response time for life-threatening and non-life-threatening incidents combined is 14 minutes and 56 seconds. Non-life-threatening emergencies include instances of drug overdose, sickness, pain etc."
        },
        {
            boro: "Manhattan",
            type: "FDNY",
            text: "It takes fire units in Manhattan have an average of 10 minutes and 9 seconds to reach life threatening medical emergencies. For non-fire emergencies, it takes an average of 10 minutes and 36 seconds. In case of fires in commercial, residential, public or vacant buildings, it takes average of 5 minutes and 6 seconds. During incidents of brush fires, auto fires or transit system fires, it takes around 6 minutes and 23 seconds, (outlier-although the average response time for such cases in February 2025 was more than 12 minutes). Majority of the fire units to any kind of fire emergency in Manhattan between 5-10 minutes."
        },
        {
            boro: "Manhattan",
            type: "Aggregate",
            text: "On average, it takes fire units and ambulances 11 minutes and 22 seconds to respond to life-threatening medical emergencies in Manhattan."
        },
        {
            boro: "Brooklyn",
            type: "Aggregate",
            text: "On average, it takes fire units and ambulances 9 minutes and 47 seconds to respond to life-threatening medical emergencies in Brooklyn."
        },
        {

        boro: "Brooklyn",
        type: "FDNY",
        text: "It takes fire unites in Brooklyn an average of 9 minutes to reach life threatening medical emergencies. For non-fire emergencies, it takes an average of 9 minutes and 45 seconds. In case of fires in commercial, residential, public or vacant buildings, it takes average of 4 minutes and 30 seconds. During incidents of brush fires, auto fires or transit system fires, it takes around 6 minutes and 8 seconds. Majority of the fire units to any kind of fire emergency in Brooklyn take less than 5 minutes."
        },
        {
        boro: "Queens",
        type: "Aggregate",
        text: "On average, it takes fire units and ambulances 10 minutes and 17 seconds to respond to life-threatening medical emergencies in Queens."
        },
        {

    boro: "Queens",
     type: "EMS",
     text: "It takes ambulances in Queens an average of 11 minutes and 5 seconds to reach life threatening medical emergencies. In case of incidents such as cardiac arrest and choking, it takes an average 9 minutes and 27 seconds. Average response time for life-threatening and non-life-threatening incidents combined is 14 minutes and 29 seconds. Non-life-threatening emergencies include instances of drug overdose, sickness, pain etc."
          },
        {

        boro: "Queens",
        type: "FDNY",
        text: "It takes fire units in Queens an average of 9 minutes 25 seconds to reach life threatening medical emergencies. For non-fire emergencies, it takes an average of 10 minutes and 38 seconds. In case of fires in commercial, residential, public or vacant buildings, it takes average of 5 minutes and 15 seconds. During incidents of brush fires, auto fires or transit system fires, it takes around 7 minutes and 10 seconds. Majority of the fire units to any kind of fire emergency in Queens take between 5-10 minutes."
         },

         {

        boro: "Bronx",
        type: "Aggregate",
        text: "On average, it takes fire units and ambulances 13 minutes and 12 seconds to respond to life-threatening medical emergencies in the Bronx."
         },
         
         {
        
            boro: "Bronx",
            type: "EMS",
            text: "It takes ambulances in the Bronx an average of 13 minutes and 28 seconds to reach life threatening medical emergencies. In case of incidents such as cardiac arrest and choking, it takes an average 10 minutes and 16 seconds. Average response time for life-threatening and non-life-threatening incidents combined is 22 minutes and 20 seconds. Non-life-threatening emergencies include instances of drug overdose, sickness, pain etc."
             },
         {
        
        boro: "Bronx",
         type: "FDNY",
         text: "It takes fire units in the Bronx an average of 11 minutes 55 seconds to reach life threatening medical emergencies. For non-fire emergencies, it takes an average of 13 minutes and 13 seconds. In case of fires in commercial, residential, public or vacant buildings, it takes average of 5 minutes and 21 seconds, (outlier-although the average response time for such cases in February 2025 was more than 11 minutes). During incidents of brush fires, auto fires or transit system fires, it takes around 6 minutes and 53 seconds. Majority of the fire units to any kind of fire emergency in Queens take between 5-10 minutes."
                 },
            {
         boro: "Staten Island",
        type: "Aggregate",
         text: "On average, it takes fire units and ambulances 9 minutes and 12 seconds to respond to life-threatening medical emergencies in Staten Island."
              },
              {
                boro: "Staten Island",
               type: "EMS",
                text: "It takes ambulances in Staten Island an average of 10 minutes and 7 seconds to reach life threatening medical emergencies. In case of incidents such as cardiac arrest and choking, it takes an average 9 minutes. Average response time for life-threatening and non-life-threatening incidents combined is 11 minutes and 55 seconds. Non-life-threatening emergencies include instances of drug overdose, sickness, pain etc."
                     },
        
             {
                boro: "Staten Island",
                type: "FDNY",
                text: "It takes fire units in Staten Island an average of 8 minutes and 23 seconds to reach life threatening medical emergencies. For non-fire emergencies, it takes an average of 9 minutes and 27 seconds. In case of fires in commercial, residential, public or vacant buildings, it takes average of 5 minutes and 11 seconds. During incidents of brush fires, auto fires or transit system fires, it takes around 5 minutes and 53 seconds. Majority of the fire units to any kind of fire emergency in Staten Island take between 5-10 minutes."
             },

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



















