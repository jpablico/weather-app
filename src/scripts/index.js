import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import "../../src/styles/style.scss";
import { getWeather, fetchWeatherData, data } from './data/data';
import { Header, updateHeader } from './components/Header';
const App = () => {
  useEffect(() => {
    console.log('Component mounted');
    getWeather();
    fetchWeatherData('Seattle');
    console.log('Data:', data);
  }, []);

  return(
    <div>
      <Header />
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
