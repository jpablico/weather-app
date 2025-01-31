async function getWeather(location = 'Mckinney,TX') {
  const apiKey = 'CK8PXYBKEK687PAUVQAXREQWH';
  const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

  try {
    const response = await fetch(`${baseUrl}/${location}/?key=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

async function fetchWeatherData(location) {
  const weatherData = await getWeather(location);
  if (weatherData) {
    console.log('Weather data:', weatherData);
    return weatherData;
  } else {
    console.log('Failed to fetch weather data');
  }
}

function searchCity(setWeatherData) {
  const search = document.getElementById('search-bar');
  const searchBtn = document.querySelector('.search-btn');

  search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const city = search.value;
      fetchWeatherData(city).then(data => setWeatherData(data));
    }
  });

  searchBtn.addEventListener('click', function () {
    const city = search.value;
    fetchWeatherData(city).then(data => setWeatherData(data));
  });
}

export { getWeather, fetchWeatherData, searchCity };