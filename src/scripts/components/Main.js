import React from 'react';
import { fetchWeatherData } from '../data/data';
import snowyDayIcon from '../../assets/weatherIcons/animated/snowy-1.svg';
import rainyIcon from '../../assets/weatherIcons/animated/rainy-1.svg';
import cloudyIcon from '../../assets/weatherIcons/animated/cloudy.svg';
import cloudyNnightIcon from '../../assets/weatherIcons/animated/cloudy-night-1.svg';
import cloudyDayIcon from '../../assets/weatherIcons/animated/cloudy-day-1.svg';
import clearDayIcon from '../../assets/weatherIcons/animated/day.svg';
import clearNightIcon from '../../assets/weatherIcons/animated/night.svg';

function Main() {
  return (
    <div className="main">
      <div className="icon"></div>
    </div>
  );
}

function updateMain(weatherData) {
  let main = document.querySelector('.main');
  main.innerHTML = `<h2>${weatherData.address}</h2>`;
  main.innerHTML += `<p>${weatherData.description}</p>`;
  main.innerHTML += `<div class="icon"></div>`;
  main.innerHTML += `<p>${weatherData.currentConditions.temp}</p>`;
  main.innerHTML += `<p>${weatherData.currentConditions.feelslike}</p>`;
  main.innerHTML += `<p>${weatherData.currentConditions.humidity}</p>`;
}

function setIcons(weatherData) {
  let main = document.getElementsByClassName('icon')[0];
  let icon = document.createElement('img');

  if (!weatherData.currentConditions.icon) {
    console.log('No icon');
    return;
  } else if (weatherData.currentConditions.icon === 'rain') {
    console.log('Rainy icon');
    icon.src = rainyIcon;
    main.appendChild(icon);
    return;
  } else if (weatherData.currentConditions.icon === 'clear-day') {
    console.log('Clear day icon');
    icon.src = clearDayIcon;
    main.appendChild(icon);
    return;
  } else if (weatherData.currentConditions.icon === 'clear-night') {
    console.log('Clear night icon');
    icon.src = clearNightIcon;
    main.appendChild(icon);
    return;
  } else if (weatherData.currentConditions.icon === 'cloudy') {
    console.log('Cloudy icon');
    icon.src = cloudyIcon;
    main.appendChild(icon);
    return;
  } else if (weatherData.currentConditions.icon === 'partly-cloudy-day') {
    console.log('Partly cloudy day icon');
    icon.src = cloudyDayIcon;
    main.appendChild(icon);
    return;
  } else if (weatherData.currentConditions.icon === 'partly-cloudy-night') {
    console.log('Partly cloudy night icon');
    icon.src = cloudyNnightIcon;
    main.appendChild(icon);
    return;
  } else if (weatherData.currentConditions.icon === 'snow') {
    console.log('Snowy icon');
    icon.src = snowyDayIcon;
    main.appendChild(icon);
    return;
  } else {
    console.log('No data returned');
    return;
  }
}

export { Main, updateMain, setIcons };