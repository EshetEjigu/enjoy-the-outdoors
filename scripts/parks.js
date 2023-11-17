"use strict"

window.onload = function (_event) {
    const locationCategory = document.getElementById("locationSelect")
    locationCategory.onchange = renderCard
    populateLocationCategory(locationsArray, locationCategory)


    const parksCategory = document.getElementById("parkSelect")
    parksCategory.onchange = renderCard
    populateParksCategory(parkTypesArray, parksCategory)

}

function populateLocationCategory(locationsArray, LocationSelect,) {
    let html = "<option>LOCATION'S</option>"
    for (let index = 0; index <= locationsArray.length; index += 1) {
        const location = locationsArray[index];
        /* const parks = nationalParksArray [locationArray]; */
        html += `<option value="${location}">${location}</option>`
    }
    LocationSelect.innerHTML = html

}

function populateParksCategory(parkTypesArray, parkSelect,) {
    let html = "<option>PARK TYPE </option>"
    for (let index = 0; index <= parkTypesArray.length; index += 1) {
        const parkType = parkTypesArray[index];

        html += `<option value="${parkType}">${parkType}</option>`
    }
    parkSelect.innerHTML = html
}



function renderCard(event) {
    const locationExplore = event.target.value;
    let html = "";

    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const location = nationalParksArray[index];

        if (location.State === locationExplore) {
            html += `<div class="card" style="width: 18rem;">
                <img src="/data/images/${location.img}" class="card-img-top" alt="">
                <div class="card-body">
                    <p class="card-text">
                        <p><strong> Name: </strong> ${location.LocationName}</p>
                        <p><strong> Address: </strong> ${location.Address}</p>
                        <p><strong> State: </strong> ${location.State}</p>
                        <p><strong> Latitude: </strong> ${location.Latitude}</p>
                        <p><strong> Longitude: </strong> ${location.Longitude}</p>
                        <p><strong> Fax: </strong> ${location.Fax}</p>
                        <p><strong> Phone: </strong> ${location.Phone}</p> 
                        </p>
                </div>
            </div>`;
        } else if (location.LocationName.includes(locationExplore) === true) {
            html += `<div class="card" style="width: 18rem;">
            <img src="/data/images/${location.img}" class="card-img-top" alt=""
            <div class="card-body">
            <p class="card-text">
            <P><strong> Name: </strong> ${location.LocationName}</p>
            <P><strong> Address: </strong> ${location.Address}</p>
            <P><strong> State: </strong> ${location.State}</p>
            <P><strong> Latitude: </strong> ${location.Latitude}</p>
            <P><strong> Longitude: </strong> ${location.Longitude}</p>
            </div>
            </div>`;
        }
    }
    const locationMan = document.getElementById("parksDiv");
    locationMan.innerHTML = html;
}
