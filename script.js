 function updateTime() {
      // Sydney
      const sydneyElement = document.querySelector("#sydney");
      if (sydneyElement) {
        const sydneyDateElement = sydneyElement.querySelector(".date");
        const sydneyTimeElement = sydneyElement.querySelector(".time");
        const sydneyTime = moment().tz("Australia/Sydney");

        sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
        sydneyTimeElement.innerHTML = sydneyTime.format(
          "h:mm:ss [<small>]A[</small>]"
        );
      }

      // Dublin
      const dublinElement = document.querySelector("#dublin");
      if (dublinElement) {
        const dublinDateElement = dublinElement.querySelector(".date");
        const dublinTimeElement = dublinElement.querySelector(".time");
        const dublinTime = moment().tz("Europe/Dublin");

        dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
        dublinTimeElement.innerHTML = dublinTime.format(
          "h:mm:ss [<small>]A[</small>]"
        );
      }

      // Philadelphia
      const philadelphiaElement = document.querySelector("#philadelphia");
      if (philadelphiaElement) {
        const philadelphiaDateElement = philadelphiaElement.querySelector(".date");
        const philadelphiaTimeElement = philadelphiaElement.querySelector(".time");
        const philadelphiaTime = moment().tz("America/New_York");

        philadelphiaDateElement.innerHTML = philadelphiaTime.format("MMMM Do YYYY");
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

      const cityName = cityTimeZone.replace("_", " ").split("/")[1];
      const cityTime = moment().tz(cityTimeZone);
      const citiesElement = document.querySelector("#cities");

      citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
      `;
    }

    // Initialize and set interval
    updateTime();
    setInterval(updateTime, 1000);