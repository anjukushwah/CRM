import React, { useState } from 'react';
import { FaHome, FaChartBar, FaCalendarPlus, FaUserCircle } from 'react-icons/fa';
import '../css/style.css'; 

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMeetingSuggestionClick = () => {
    setShowPopup(true);
  };

  const handleOptionClick = () => {
    setShowPopup(false);
  };

  return (
    <div className="page-container"> 
      <div className="content"> 
      </div>

      <footer className="footer">
        <div className="footer-icons">
          <a href="#meetingsuggestion" className="footer-icon" onClick={handleMeetingSuggestionClick}>
            <FaCalendarPlus />
            <p>Meeting Suggestion</p>
          </a>
          
          <div className="footer-icon home-center">
            <a href="#home" className="footer-icon">
              <FaHome />
              <p>Home</p>
            </a>
          </div>
          <a href="#contact" className="footer-icon">
            <FaUserCircle />
            <p>Client Profile</p>
          </a>

          <a href="#businessanalytics" className="footer-icon">
            <FaChartBar />
            <p>Business Analytics</p>
          </a>
        </div>

        {/* Popup Section */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <div className="popup-options">
                <p className="popup-option" onClick={handleOptionClick}>Manager Meeting</p>
                <p className="popup-option" onClick={handleOptionClick}>Team Meeting</p>
                <p className="popup-option" onClick={handleOptionClick}>Client Meeting</p>
                <p className="popup-option" onClick={handleOptionClick}>Project Review</p>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
