import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import "../../src/styles/style.scss";
import { fetchWeatherData, searchCity } from './data/data';
import { Header, setDate } from './components/Header';
import Main from './components/Main';
import { WeatherCard } from './components/WeatherCard';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    setDate();
    fetchWeatherData('Seattle').then(data => setWeatherData(data));
    searchCity(setWeatherData);
  }, []);

  return (
    <>
      <Header />
      <Main weatherData={weatherData} />
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
