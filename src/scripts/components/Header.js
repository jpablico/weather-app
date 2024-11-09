import React from 'react';
import "../../styles/style.scss";

function Header() {
  return (
    <header id = 'header'>
      <div className = 'search-container'>
        <input type = 'text' id = 'search-bar' placeholder = 'Search for a location'></input>
        <span className="material-symbols-outlined">search</span>
      </div>
    </header>
  );
}

export { Header};