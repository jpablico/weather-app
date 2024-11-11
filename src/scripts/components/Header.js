import React from 'react';
import "../../styles/style.scss";

function Header() {
  return (
    <header id = 'header'>
      <div className = 'user-container'>
        <div className = 'user-icon'>
          <span className="material-symbols-outlined user-icon">account_circle</span>
        </div>
        <div className = 'user-info'>
          <h5 className='user-name'>Hey, Josh</h5>
          <h2 className='date'>Monday, November 11th</h2>
        </div>
      </div>
      <div className = 'search-container'>
        <input type = 'text' id = 'search-bar' placeholder = 'Search for a location'></input>
        <span className="material-symbols-outlined">search</span>
      </div>
    </header>
  );
}

export { Header};