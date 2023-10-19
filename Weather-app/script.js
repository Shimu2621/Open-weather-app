document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("location");
    const searchBtn = document.getElementById("search-btn");
    const cityName = document.getElementById("city");
    const weatherInfo = document.getElementById("weather-container");

    searchBtn.addEventListener("click", () => {
        const locationText = textInput.value;
        console.log(locationText, city);

        city.innerHTML = locationText;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationText}&appid=80c255a228badc45bbb54804317acd5e`)
            .then((response) => response.json())
            .then((data) => {
               const cityName = data.name; 
               const temperature = Math.round(data.main.temp - 273.15);
               const description = data.weather[0].description;
               //console.log(cityName, temperature, description)
   
               const weatherHTML = `
               <h1 id="city">${cityName}</h1>
               <h3><span id="temp">${temperature}<?span>&deg;C</h3>
               <h1 id="status" class="lead">${description}</h1>
               `
               weatherInfo.innerHTML = weatherHTML;
            })
            .catch((error) => console.log(error))
    
   })

})
   // const locationText = textInput.value;
        // const locationList = document.createElement("select");
        // const locationHTML = `
        // <select>
        //     <option value= "0" selected>${locationList}</option>
        //     <option value= "1">${London}</option>
        //     <option value= "2">${Florida}</option>
        //     <option value= "3">${Canada}</option>
        //     <option value= "4">${NewYork}</option>
        //     <option value= "5">${Dhaka}</option>
        //     <option value= "6">${Michigan}</option>
        // </select>
        // `
        // locationText.innerHTML = locationHTML;