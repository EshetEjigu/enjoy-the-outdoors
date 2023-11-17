"use strict";

window.onload = function () {
  const selectedMountain = document.getElementById("mountainList");
  populateMountainsDropdown(mountainsArray, selectedMountain);

  // Add event listener for dropdown changes
  selectedMountain.addEventListener("change", displayMountainInfo);
};

function populateMountainsDropdown(mountains, selectElement) {
  let html = "<option value=''>MOUNTAIN LIST</option>";
  for (const currentMountain of mountains) {
    console.log(currentMountain);

    // add an <option> tag for every mountain
    html += `<option value="${currentMountain.name}">${currentMountain.name}</option>`;
  }

  selectElement.innerHTML = html
}

function displayMountainInfo() {
  const selectedMountain = document.getElementById("mountainList").value;
  const mountainInfoContainer = document.getElementById("mountainInfo");
  let mountainFound = false;

  for (const mountain of mountainsArray) {
    if (mountain.name === selectedMountain) {
      const mountainInfo = mountain;
      mountainInfoContainer.innerHTML = `
              <h2>${mountainInfo.name}</h2>  
              <p><strong>Elevation:</strong> ${mountainInfo.elevation} feet</p>
              <p><strong>Effort:</strong> ${mountainInfo.effort}</p>
              <img src="/data/images/${mountainInfo.img}" alt="${mountainInfo.name}">
              <p>${mountainInfo.desc}</p>
              <p><strong>Coordinates:</strong> Latitude ${mountainInfo.coords.lat}, Longitude ${mountainInfo.coords.lng}</p>
          `;
      mountainFound = true; // Set flag to true when mountain is found
      break; // Exit the loop once a mountain is found
    }
  }

  // Check if the selected mountain exists in the data
  if (!mountainFound) {
    mountainInfoContainer.innerHTML = "<p>Mountain information not available.</p>";
  }
}
