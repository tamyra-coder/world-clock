function updateTime() {
  // Los Angeles
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = losAngelesElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("MMMM	Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let philadelphiaElement = document.querySelector("#paris");
  if (philadelphiaElement) {
    let philadelphiaDateElement = parisElement.querySelector(".date");
    let philadelphiaTimeElement = parisElement.querySelector(".time");
    let philadelphiaTime = moment().tz("North America/Philadelphia");

    philadelphiaDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    philadelphiaTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);