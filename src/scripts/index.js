import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { getWeather } from './data/data';

const App = () => {
  useEffect(() => {
    console.log('Component mounted');
    getWeather();

    (async function () {
      console.log('Ambiguous city  ---');
      await getWeather('Springfield'); // Test an ambiguous city name
      console.log('Specific city ---');
      await getWeather('Springfield, MO'); // Test specific city/state
      console.log('Specific city ---');
      await getWeather('Everett'); // Test specific
    })();
    
  }, []);

  return <h1>Hello, World!</h1>;
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
