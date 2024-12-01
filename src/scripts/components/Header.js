import React from 'react';
import "../../styles/style.scss";
import userIcon from '../../assets/portraitJoshP.jpeg';
import userIcon2 from '../../assets/Homecooked - Logo v1.png'

function Header() {
  return (
    <header id='header'>
      <div className='user-container'>
        <div className='user-icon'>
          <img src = { userIcon2 } alt='User Icon' className='user-icon'/>
        </div>
        <div className='user-info'>
          <h5 className='user-name'>Hey, Josh</h5>
          <h2 className='date'></h2>
        </div>
      </div>
      <div className='utility-container'>
        <div className='search-container'>
          <input type='text' id='search-bar' placeholder='Search for a location'></input>
          <span className="material-symbols-outlined search-btn">search</span>
        </div>
        <div className='settings-container'>
          <span className='material-symbols-outlined settings-cog'>settings</span>
          <div className='settings-dropdown'>
            <ul>
              <li>Settings</li>
              <li>Profile</li>
              <li>Logout</li>
            </ul>
          </div>
         </div>
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

function toggleSettings() {
  const settingsCog = document.querySelector('.settings-cog');
  const settingsDropdown = document.querySelector('.settings-dropdown');
  settingsCog.addEventListener('click', () => {
    console.log('settings toggle');
    settingsDropdown.classList.toggle('active');
  });
}


export { Header, setDate, toggleSettings };