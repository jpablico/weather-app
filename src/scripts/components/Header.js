import React from 'react';
import "../../styles/style.scss";

function Header() {
  return (
    <header id = 'header'>
      <div className = 'search-container'>
        <input type = 'text' id = 'search-bar' placeholder = 'Search for a location'></input>
        <span className="material-symbols-outlined">search</span>
      </div>
      <div className = 'location-container'>
        
      </div>
    </header>
  );
}

function updateHeader(weatherData) {
  let header = document.getElementById('header');
  header.innerHTML = `<h1>${weatherData.address}</h1>`;
  header.innerHTML += `<p>${weatherData.description}</p>`;
} 
export { Header, updateHeader };