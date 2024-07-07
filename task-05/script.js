const apiKey = 'f11601e32bb112d9912ea7fdf1c69352'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const location = document.getElementById('locationInput').value;

    // Clear previous weather information
    document.getElementById('weatherInfo').innerHTML = '';

    // Fetch weather data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check the console for the API response

            // Display weather information
            const weatherInfo = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} &deg;C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
        <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
      `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}
