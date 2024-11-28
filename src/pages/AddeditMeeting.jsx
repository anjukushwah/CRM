
import React, { useState, useEffect } from 'react';
import { timePicker } from 'analogue-time-picker';
import '../css/style.css';
import '../css/clock.css';
import { FaPhoneSquareAlt } from "react-icons/fa";


function AddEditMeetingPage() {
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientMobile, setClientMobile] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [panNumber, setPanNumber] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [meetingAgenda, setMeetingAgenda] = useState('');

  const [showTime, setShowTime] = useState();
  const [hour, setHour] = useState('1');
  const [minute, setMinute] = useState('00');
  const [timeSet, setTimeSet] = useState(false);

  const [meetingLocation, setMeetingLocation] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  useEffect(() => {
    setShowTime(
      timePicker({
        element: document.getElementById('clock'),
        mode: 12,
        width: '130px', 
        time: { hour: 1, minute: 0 }
      })
    );
  }, []);

  function handleSetClick() {
    const object = showTime.getTime();
    setHour(object.hour);
    setMinute(object.minute);
    setTimeSet(true);
  }

  function handleClearClick() {
    setHour('1');
    setMinute('00');
    setTimeSet(false);
  }

  function handleCancelClick() {
    setHour('1');
    setMinute('00');
    setTimeSet(false);
  }

  return (
    <div className="addeditmeeting-wrapper">
      <div className="addeditmeeting-page-container">
        <div className="addeditmeeting-date-picker-container form-field">
          <label className="addeditmeeting-label" htmlFor="meetingDate">Date:</label>
          <input
            className="addeditmeeting-input"
            type="date"
            id="meetingDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="addeditmeeting-meeting-type-container form-field">
          <label className="addeditmeeting-label" htmlFor="meetingType">Meeting With:</label>
          <select
            className="addeditmeeting-input addeditmeeting-select"
            id="meetingType"
            value={meetingType}
            onChange={(e) => setMeetingType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="new">New</option>
            <option value="existing">Existing Event</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="addeditmeeting-client-details-form">
          <div className="form-field">
            <label className="addeditmeeting-label" htmlFor="clientName">Client Name:</label>
            <input
              className="addeditmeeting-input"
              type="text"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter client name"
            />
          </div>

          <div className="form-field">
            <label className="addeditmeeting-label" htmlFor="panNumber">PAN Number:</label>
            <input
              className="addeditmeeting-input"
              type="text"
              id="panNumber"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              placeholder="Enter PAN number"
            />
          </div>

          <div className="form-field mobile-number-container">
            <label className="addeditmeeting-label" htmlFor="clientMobile">Mobile Number:</label>
             
            <input
              className="addeditmeetingmobile-input"
              type="tel"
              id="clientMobile"
              value={clientMobile}
              onChange={(e) => setClientMobile(e.target.value)}
              placeholder="Enter mobile number"
              />
              <FaPhoneSquareAlt style={{ width: '40px', height: '40px' }} />
            
          </div>

          <div className="form-field">
            <label className="addeditmeeting-label" htmlFor="clientAddress">Client Address:</label>
            <input
              className="addeditmeeting-input"
              type="text"
              id="clientAddress"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              placeholder="Enter client address"
            />
          </div>

          <div className="addeditmeeting-meeting-agenda-container form-field">
            <label className="addeditmeeting-label" htmlFor="meetingAgenda">Meeting Agenda:</label>
            <select
              className="addeditmeeting-input addeditmeeting-select"
              id="meetingAgenda"
              value={meetingAgenda}
              onChange={(e) => setMeetingAgenda(e.target.value)}
            >
              <option value="">Select</option>
              <option value="portfolio">Portfolio</option>
              <option value="new-business">New Business</option>
              <option value="services">Services</option>
              <option value="task-b">Task By BA</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="clock">Time:</label>
          <div className="clock-container">
            <div id="clock" className='clockedit'></div>
          </div>
          <div className="mat-card">
              <button className="setbtn" onClick={handleSetClick}>
                Set
              </button>
              <button className="clearbtn" onClick={handleClearClick}>
                Clear
              </button>
            </div>
            <div className="mat-card">
              <h4 style={{ marginBottom: '0px', marginRight: '80px', fontSize: '20px' }}>
                {timeSet ? `Selected Time = ${hour} : ${minute}` : 'No time selected'}
              </h4>
            </div>
        </div>


        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="remark">Remark:</label>
          <textarea
            className="addeditmeeting-input"
            id="remark"
            placeholder="Enter any remarks"
          />
        </div>

        <div className="form-field">
          <label className="addeditmeeting-label" htmlFor="meetingLocation">Meeting Location:</label>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <label className="addeditmeeting-label" htmlFor="fromLocation" style={{ marginRight: '8px' }}>From:</label>
          <input
            className="addeditmeeting-input"
            type="text"
            id="fromLocation"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            placeholder="Enter from location"
          />
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '10px' }}>
          <label className="addeditmeeting-label" htmlFor="toLocation" style={{ marginRight: '30px' }}>To:</label>
          <input
            className="addeditmeeting-input"
            type="text"
            id="toLocation"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            placeholder="Enter to location"
          />
        </div>

        <div>
  <button className="addmeeting-button sub-button" onClick={handleSetClick}>
    Submit
  </button>
  <button className="addmeeting-button edit-button" onClick={handleClearClick}>
    Edit
  </button>
</div>


      </div>
    </div>
  );
}

export default AddEditMeetingPage;
