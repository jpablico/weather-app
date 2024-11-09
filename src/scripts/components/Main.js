import React from 'react';
import { fetchWeatherData } from '../data/data';
import rainyIcon from '../../assets/weatherIcons/animated/rainy-1.svg';

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
}

function setIcons(weatherData) {
  let main = document.getElementsByClassName('icon')[0];
  let icon = document.createElement('img');

  if (!weatherData.currentConditions.icon) {
    return;
  } else if (weatherData.currentConditions.icon === 'rain') {
    console.log('Rainy icon');
    icon.src = rainyIcon;
    main.appendChild(icon);
    return;
  }
}

export { Main, updateMain, setIcons };