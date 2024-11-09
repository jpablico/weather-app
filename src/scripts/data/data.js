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

export { getWeather };