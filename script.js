let key = "4ec67467a9b9f37556f4543c9a731e20";
let url = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${key}&units=metric`;

// --------------------------------------------------------------------------------------------------

const getdata = async () => {
    let promise = await fetch(url);

    try {
        let data = await promise.json();

        document.getElementById("city").innerText = data.name + ", " + data.sys.country;
        document.getElementById("temperature").innerText = data.main.temp + " °C";
        document.getElementById("humidity").innerText = data.main.humidity + " %";
        document.getElementById("weather").innerText = data.weather[0].main + " Type";
        document.getElementById("clouds").innerText = data.clouds.all + " Okta";
        document.getElementById("wind-speed").innerText = data.wind.speed + " Km/Hr";
    } catch (error) {
        alert("City Not Found!");
    }
}

// --------------------------------------------------------------------------------------------------

let btn = document.getElementById('button');
let input = document.getElementById('input');

// --------------------------------------------------------------------------------------------------

btn.addEventListener("click", () => {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`;
    getdata();
})