import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import "../../src/styles/style.scss";
import { fetchWeatherData, searchCity } from './data/data';
import { Header, setDate, toggleSettings } from './components/Header';
import Main from './components/Main';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    setDate();
    fetchWeatherData('Seattle').then(data => setWeatherData(data));
    searchCity(setWeatherData);
    toggleSettings();
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
