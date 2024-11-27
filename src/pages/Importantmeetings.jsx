import React, { useState } from 'react';
import '../css/style.css';

const Importantmeetings = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const meetings = {
    Sun: ["Team Standup - 10 AM", "Project Review - 2 PM"],
    Mon: ["Client Meeting - 9 AM", "Development Sync - 3 PM"],
    Tue: ["Design Discussion - 11 AM"],
    Wed: ["Weekly Update - 10 AM", "Code Review - 4 PM"],
    Thu: ["Sprint Planning - 1 PM"],
    Fri: ["Team Retrospective - 5 PM"],
    Sat: ["No Meetings Scheduled"],
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedDay(null);
  };

  return (
    <div className="importantmeetings-container">
      <div className="importantmeetings-days">
        {days.map((day) => (
          <button
            key={day}
            className="importantmeetings-day-btn"
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {showPopup && (
        <div className="importantmeetings-popup-overlay">
          <div className="importantmeetings-popup">
            <button className="importantmeetings-popup-close" onClick={closePopup}>
              &times;
            </button>
            <h2 className="importantmeetings-heading">Meetings for {selectedDay}</h2>
            <ul>
              {meetings[selectedDay].map((meeting, index) => (
                <li key={index} className="importantmeetings-popup-option">{meeting}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Importantmeetings;
