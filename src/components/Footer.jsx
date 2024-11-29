import React, { useState } from 'react';
import { FaHome, FaChartBar, FaCalendarPlus, FaUserCircle, FaPlus, FaArrowLeft, FaArrowRight, FaRedo, FaTimes } from 'react-icons/fa'; // Added FaTimes for close icon
import { useNavigate } from 'react-router-dom'; 
import '../css/style.css'; 

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(1); 
  const navigate = useNavigate(); 

  const handleMeetingSuggestionClick = () => {
    setShowPopup(true);
  };

  const handleOptionClick = () => {
    setShowPopup(false);
  };

  const handleMonthChange = (direction) => {
    
    setSelectedMonth(prevMonth => {
      if (direction === "left") {
        return prevMonth > 1 ? prevMonth - 1 : 1; 
      }
      return prevMonth < 6 ? prevMonth + 1 : 6; 
    });
  };

  const handleAddEditMeetingClick = () => {
    setShowPopup(false); 
    navigate('/AddeditMeeting'); 
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

       
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <div className="popup-header">
               
                <div className="popup-close" onClick={handleOptionClick}>
                  <FaTimes /> 
                </div>

              
                <div className="month-selector">
                  <button className="arrow-btn" onClick={() => handleMonthChange("left")}>
                    <FaArrowLeft />
                  </button>

                  <div className="month-display">
                    <span>{selectedMonth} Month{selectedMonth > 1 ? 's' : ''}</span>
                  </div>

                  <button className="arrow-btn" onClick={() => handleMonthChange("right")}>
                    <FaArrowRight />
                  </button>
                </div>

                
                <div className="popup-refresh">
                  <FaRedo /> 
                </div>
              </div>

            
              <div className="popup-options">
                {['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis', 'David Wilson', 'Sophia Taylor', 'James Brown', 'Charlotte Harris', 'Liam Clark', 'Olivia Lewis'].map((name, index) => (
                  <div key={index} className="popup-option">
                    <img src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} alt={name} className="popup-option-img" />
                    <span className="popup-option-name">{name}</span>
                    <a href="#AddeditMeeting" className="popup-option-add" onClick={handleAddEditMeetingClick}>
                      <FaPlus />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
