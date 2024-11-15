import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/style.scss';

import snowyDayIcon from '../../assets/weatherIcons/animated/snowy-1.svg';
import rainyIcon from '../../assets/weatherIcons/animated/rainy-1.svg';
import cloudyIcon from '../../assets/weatherIcons/animated/cloudy.svg';
import cloudyNightIcon from '../../assets/weatherIcons/animated/cloudy-night-1.svg';
import cloudyDayIcon from '../../assets/weatherIcons/animated/cloudy-day-1.svg';
import clearDayIcon from '../../assets/weatherIcons/animated/day.svg';
import clearNightIcon from '../../assets/weatherIcons/animated/night.svg';

function WeatherCard({ weatherData }) {
  const getIconSrc = (icon) => {
    switch (icon) {
      case 'rain':
        return rainyIcon;
      case 'clear-day':
        return clearDayIcon;
      case 'clear-night':
        return clearNightIcon;
      case 'cloudy':
        return cloudyIcon;
      case 'partly-cloudy-day':
        return cloudyDayIcon;
      case 'partly-cloudy-night':
        return cloudyNightIcon;
      case 'snow':
        return snowyDayIcon;
      default:
        return null;
    }
  };

  const iconSrc = getIconSrc(weatherData.currentConditions.icon);

  return (
    <div className="location-container">
      <div className="location-main-card">
        <h2 className="location">{weatherData.address}</h2>
        <p className="condition">{weatherData.currentConditions.conditions}</p>
        <div className="icon-container">
          {iconSrc && <img src={iconSrc} alt={weatherData.currentConditions.icon} className='weather-icon'/>}
        </div>
      </div>
      <div className="location-data-card">
          <h3 className='currentConditions'>Current Conditions</h3>
            <div className="sub-card">
              <div className="sub-card-item">
                <h5 className='sub-card-title'>Temperature</h5>
                <p>{weatherData.currentConditions.temp}</p>
              </div>
            </div>
            
            <p>Feels like: {weatherData.currentConditions.feelslike}</p>
            <p>Humidity: {weatherData.currentConditions.humidity}</p>
        </div>
    </div>
  );
}

WeatherCard.propTypes = {
  weatherData: PropTypes.shape({
    address: PropTypes.string.isRequired,
    currentConditions: PropTypes.shape({
      conditions: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      feelslike: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherCard;