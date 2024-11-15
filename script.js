function updateTime() {
  
  let kualaLumpurElement = document.querySelector("#kuala-lumpur");
  if (kualaLumpurElement) {
    kualaLumpurDateElement = kualaLumpurElement.querySelector(".date");
    let kualaLumpurTimeElement = kualaLumpurElement.querySelector(".time");
    let kualaLumpurTime = moment().tz("Asia/Malaysia");

    kualaLumpurDateElement.innerHTML = kualaLumpurTime.format("MMMM	Do YYYY");
    kualaLumpurTimeElement.innerHTML = kualaLumpurTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }


  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("MMMM	Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let philadelphiaElement = document.querySelector("#philadelphia");
  if (philadelphiaElement) {
    let philadelphiaDateElement = philadelphiaElement.querySelector(".date");
    let philadelphiaTimeElement = philadelphiaElement.querySelector(".time");
    let philadelphiaTime = moment().tz("North America/Pennsylvania");

    philadelphiaDateElement.innerHTML = philadelphiaTime.format("MMMM	Do YYYY");
    philadelphiaTimeElement.innerHTML = philadelphiaTime.format(
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