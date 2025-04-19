
// select container, loop through the array, for each thing,
// create a card, append it to the container

  const container = document.getElementById("container");

let cards =
[
    {
      "Neighborhood": "Ridgewood",
      "Borough": "Queens",
      "Zip Code": 11385,
      "Traffic Density": "Low",
      "No. of Complaints": "2,384",
      "Most Common Vehicle Type": "Cars"
    },
    {
      "Neighborhood": "Fresh Meadows",
      "Borough": "Queens",
      "Zip Code": 11366,
      "Traffic Density": "Medium",
      "No. of Complaints": "3,082",
      "Most Common Vehicle Type": "Other"
    },
    {
      "Neighborhood": "DUMBO",
      "Borough": "Brooklyn",
      "Zip Code": 11201,
      "Traffic Density": "High",
      "No. of Complaints": "2,792",
      "Most Common Vehicle Type": "Cars"
    },
    {
      "Neighborhood": "Greenpoint",
      "Borough": "Brooklyn",
      "Zip Code": 11222,
      "Traffic Density": "Low",
      "No. of Complaints": "2,207",
      "Most Common Vehicle Type": "Trucks, Cars"
    },
    {
      "Neighborhood": "Riverdale-Spuyten Duyvil",
      "Borough": "Bronx",
      "Zip Code": 10463,
      "Traffic Density": "Medium",
      "No. of Complaints": "1,423",
      "Most Common Vehicle Type": "Cars"
    },
    {
      "Neighborhood": "Highbridge",
      "Borough": "Bronx",
      "Zip Code": 10452,
      "Traffic Density": "High",
      "No. of Complaints": "1,165",
      "Most Common Vehicle Type": "Other"
    },
    {
      "Neighborhood": "Hell's Kitchen",
      "Borough": "Manhattan",
      "Zip Code": 10036,
      "Traffic Density": "High",
      "No. of Complaints": "12,020",
      "Most Common Vehicle Type": "Trucks"
    },
    {
      "Neighborhood": "Midtown West",
      "Borough": "Manhattan",
      "Zip Code": 10019,
      "Traffic Density": "High",
      "No. of Complaints": "5,467",
      "Most Common Vehicle Type": "Cars"
    },
    {
      "Neighborhood": "New Springville",
      "Borough": "Staten Island",
      "Zip Code": 10314,
      "Traffic Density": "Low",
      "No. of Complaints": "1,031",
      "Most Common Vehicle Type": "Cars"
    },
    {
      "Neighborhood": "Annadale-Huguenot-Prince's Bay",
      "Borough": "Staten Island",
      "Zip Code": 10312,
      "Traffic Density": "Low",
      "No. of Complaints": "701",
      "Most Common Vehicle Type": "Cars, Trucks"
    }
   ]

   cards.forEach(function(card){
        let neighborhood = document.createElement('div');

        neighborhood.classList.add('card');
        neighborhood.setAttribute('data-boro',card.Borough);

        neighborhood.innerHTML = `<h2 class="neighborhood">${card.Neighborhood}</h2>
        <p class="boro">Borough: ${card.Borough}</p>
        <p class="zip">Zip Code: ${card["Zip Code"]}</p>
        <p class="traffic">Traffic Density: ${card["Traffic Density"]}</p>
        <p class="complaints">No. of Complaints: ${card["No. of Complaints"]}</p>
        <p class="vehicle">Most Common Vehicle Type: ${card["Most Common Vehicle Type"]}</p>`;
   
        container.append(neighborhood);
  });


   const dropdown = document.getElementById("filterDropdown");

   dropdown.addEventListener("change", function() {
      const selected = this.value;
      const cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        const boro = card.getAttribute("data-boro");

        if (selected === "All"|| boro === selected) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
    }
  });
});

// changing some styles 

document.getElementById("filterDropdown").style.marginLeft = "55px";
document.getElementById("container").style.margin = "40px";
document.getElementById("title").style.margin = "40px";
document.getElementById("filterDropdown").style.backgroundColor = "#E8E8E4";
document.getElementById("filterDropdown").style.borderBlockColor = "#a5a58d";
document.getElementById("filterDropdown").style.borderWidth = "5px";
document.getElementById("filterDropdown").style.borderLeftColor = "#a5a58d";
document.getElementById("filterDropdown").style.borderRightColor = "#a5a58d";
