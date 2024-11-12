import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import "../../src/styles/style.scss";
import { fetchWeatherData, searchCity } from './data/data';
import { Header, setDate } from './components/Header';
import { Main,  } from './components/Main';
import { WeatherCard } from './components/WeatherCard';

const App = () => {
  useEffect(() => {
    setDate();
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
