import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import "../../src/styles/style.scss";
import { getWeather, fetchWeatherData, data } from './data/data';
import { Header } from './components/Header';
import { Main, updateMain } from './components/Main';
const App = () => {
  useEffect(() => {
    console.log('Component mounted');
    getWeather();
    fetchWeatherData('Seattle');
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
