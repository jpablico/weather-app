import React from 'react';
import "../../styles/style.scss";
import userIcon from '../../assets/portraitJoshP.jpeg';

function Header() {
  return (
    <header id='header'>
      <div className='user-container'>
        <div className='user-icon'>
          <img src = { userIcon } alt='User Icon' className='user-icon'/>
        </div>
        <div className='user-info'>
          <h5 className='user-name'>Hey, Josh</h5>
          <h2 className='date'></h2>
        </div>
      </div>
      <div className='search-container'>
        <input type='text' id='search-bar' placeholder='Search for a location'></input>
        <span className="material-symbols-outlined">search</span>
      </div>
    </header>
  );
}

function currentDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

function setDate() {
  const date = document.querySelector('.date');
  date.textContent = currentDate();
}

export { Header, setDate };