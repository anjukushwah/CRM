import React, { useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import crinigerTechnologiesLogo from '../assets/criniger-technologies-logo.png';
import profileImage from '../assets/profileImage.png'; 
import "../css/style.css";

function Navbar() {
 
  const [profileMenu, setProfileMenu] = useState(false);

  const toggleProfileMenu = () => setProfileMenu(!profileMenu);

  return (
    <header className='navbar'>
      <div className='navbar-left'>
        
        <img
          src={crinigerTechnologiesLogo} 
          alt="Company Logo" 
          className="navbar-logo" 
        />
      </div>
      <div className='navbar-right'>
        <BsFillBellFill className='icon' />

       
        <div className="user-info" onClick={toggleProfileMenu}>
          
          <div className="profile-image">
            <img 
              src={profileImage} 
              alt="User Profile" 
              className="profile-inner-image" 
            />
          </div>
          <span className="username">John Does</span>
        </div>

      
        {profileMenu && (
          <div className="profile-menu">
            <ul>
              <li>My Profile</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
