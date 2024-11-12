import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchWeatherData } from '../data/data';
import { WeatherCard } from './WeatherCard';

function Main() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchWeatherData('Seattle');
      setWeatherData(data);
    }
    getData();
  }, []);

  return (
    <div className="main">
      {weatherData ? <WeatherCard weatherData={weatherData} /> : <p>Loading...</p>}
    </div>
  );
}

export { Main };