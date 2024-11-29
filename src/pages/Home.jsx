import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [startDate, setStartDate] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);

    const meetings = [
        { date: '01 Dec 2024', time: '9:00 AM - 9:40 AM', description: 'Kick-off meeting', status: 'Scheduled', participant: 'Emily' },
        { date: '05 Dec 2024', time: '11:00 AM - 11:40 AM', description: 'Budget discussion', status: 'In Progress', participant: 'Michael' },
        { date: '10 Dec 2024', time: '2:00 PM - 3:00 PM', description: 'Project Review', status: 'Scheduled', participant: 'Sophia' },
        { date: '15 Dec 2024', time: '4:30 PM - 5:15 PM', description: 'Final Presentation', status: 'Completed', participant: 'Daniel' },
    ];

    const navigate = useNavigate();

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        setDaysInMonth(days);
        setStartDate(new Date(year, month, 1).getDay());
    }, [currentDate]);

    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
        setSelectedDate(null);
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
        setSelectedDate(null);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const redirectToAddMeeting = () => {
        navigate('/AddeditMeeting');
    };

    const filteredMeetings = selectedDate
        ? meetings.filter(meeting => meeting.date === selectedDate)
        : meetings;

    const lastMeetingDate = filteredMeetings.length > 0 ? filteredMeetings[filteredMeetings.length - 1].date : null;

    return (
        <>
            <div className='calendar-container'>
                <div className='calendar-and-meeting'>
                    <div className='calendar'>
                        <div className='calendar-header'>
                            <button onClick={prevMonth}>&lt;</button>
                            <span>
                                {currentDate.toLocaleString('default', { month: 'long' })}{' '}
                                {currentDate.getFullYear()}
                            </span>
                            <button onClick={nextMonth}>&gt;</button>
                        </div>
                        <div className='day-names'>
                            {dayNames.map((day) => (
                                <div key={day} className='day-name'>
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className='days'>
                            {Array.from({ length: startDate }).map((_, index) => (
                                <div key={index} className='empty-day'></div>
                            ))}
                            {daysInMonth.map((day) => {
                                const formattedDate = day.toISOString().split('T')[0];
                                const hasMeeting = meetings.some(meeting => meeting.date === formattedDate);
                                return (
                                    <div
                                        key={day}
                                        className={`day ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? 'today' : ''} ${hasMeeting ? 'meeting-day' : ''}`}
                                        onClick={() => handleDateClick(formattedDate)}
                                    >
                                        {day.getDate()}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="meeting-details">
                        <h3 className="meeting-heading">Meeting Schedule</h3>
                        <div className="meeting-details-div">
                            {meetings.map((meeting, index) => (
                                <div key={index} className="meeting-info">
                                    <div className="circle-icon"></div>
                                    <div className="meeting-time">
                                        <span className="meeting-time-label">{meeting.time}</span>
                                        <div className="vertical-border"></div>
                                    </div>
                                    <div className="meeting-side-div">
                                        <div className="meeting-side-div-row">
                                            <span className="meeting-side-name">{meeting.participant}</span>
                                            <span
                                                className="meeting-side-date"
                                                onClick={redirectToAddMeeting} // Make it clickable
                                            >
                                                {meeting.date}
                                            </span>
                                        </div>

                                        <div className="meeting-buttons">
                                            <button className="in-progress-btn">In Progress</button>
                                            <button className="complete-btn">Complete</button>
                                        </div>
                                    </div>
                                    {/* Edit button appears on hover */}
                                    <div className="edit-button-container">
                                        <button 
                                            className="edit-button"
                                            onClick={redirectToAddMeeting}
                                            title="Edit"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* The "+" icon for adding a meeting */}
            <div className="add-meeting-icon after-last-meeting" onClick={redirectToAddMeeting}>
                <span>+</span>
            </div>
        </>
    );
};

export default Calendar;
