import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import "../../src/styles/style.scss";
import { getWeather, fetchWeatherData, data, searchCity } from './data/data';
import { Header, setDate } from './components/Header';
import { Main, updateMain } from './components/Main';
const App = () => {
  useEffect(() => {
    setDate();
    getWeather();
    fetchWeatherData('Seattle');
    searchCity();
  }, []);

  return(
    <>
      <Header />
      <Main />
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
