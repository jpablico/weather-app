import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard';

function Main({ weatherData }) {
  return (
    <div className="main">
      {weatherData ? <WeatherCard weatherData={weatherData} /> : <p>Loading...</p>}
    </div>
  );
}

Main.propTypes = {
  weatherData: PropTypes.object,
};

export default Main;