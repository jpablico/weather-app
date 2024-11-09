import { updateHeader } from "../components/Header";

async function getWeather(location = 'Mckinney,TX') {
  const apiKey = 'CK8PXYBKEK687PAUVQAXREQWH';
  const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

  try {
    const response = await fetch(`${baseUrl}/${location}/?key=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
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
    data.push(weatherData);
    //updateHeader(weatherData);
    return weatherData;
  } else {
    console.log('Failed to fetch weather data');
  }
}

let data = [

]

export { getWeather, fetchWeatherData, data };