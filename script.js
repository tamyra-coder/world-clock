function updateTime() {
  updateCityTime("Australia/Sydney", "#sydney");
  updateCityTime("Europe/Dublin", "#dublin");
  updateCityTime("America/New_York", "#philadelphia");
}

function updateCityTime(timezone, elementId) {
  const element = document.querySelector(elementId);
  const dateElement = element.querySelector(".date");
  const timeElement = element.querySelector(".time");

  const time = moment().tz(timezone);
  dateElement.innerHTML = time.format("MMMM Do YYYY");
  timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
}

function updateSelectedCity(event) {
  const cityTimeZone = event.target.value;
  const citiesContainer = document.querySelector("#cities");

  // Hide all city elements by default
  const allCityElements = document.querySelectorAll(".city");
  allCityElements.forEach((cityElement) => {
    cityElement.style.display = "none";  // Hide all cities
  });

  // Check if 'Show All Cities' is selected
  if (cityTimeZone === "all-cities") {
    // Show all cities again
    allCityElements.forEach((cityElement) => {
      cityElement.style.display = "block";  // Show all cities
    });
    return; // Exit function if 'Show All Cities' is selected
  }

  // If 'current-location' is selected, get the user's local timezone
  const timezone = cityTimeZone === "current-location" ? moment.tz.guess() : cityTimeZone;
  const cityName = timezone.split("/")[1].replace("_", " ");

  // Create a new city display element for the selected city
  const selectedCityElement = document.querySelector(`#selected-city`);
  if (selectedCityElement) {
    selectedCityElement.remove();  // Remove any previous selected city element
  }

  // Create new element to display the selected city's time
  const cityElement = document.createElement("div");
  cityElement.setAttribute("id", "selected-city");
  cityElement.classList.add("city");
  cityElement.innerHTML = `
    <div>
      <h2>${cityName}</h2>
      <div class="date">${moment().tz(timezone).format("MMMM Do YYYY")}</div>
      <div class="time">${moment().tz(timezone).format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
  `;
  citiesContainer.insertBefore(cityElement, citiesContainer.firstChild);

  // Show the selected city's time
  const selectedCity = document.querySelector(`#${cityTimeZone}`);
  if (selectedCity) {
    selectedCity.style.display = "block";
  }
}

document.querySelector("#city").addEventListener("change", updateSelectedCity);

// Set interval to update times every second
updateTime();
setInterval(updateTime, 1000);
