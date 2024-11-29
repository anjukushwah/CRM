/* import React from 'react';
import { FaRegCalendarAlt, FaHistory, FaFilter, FaUserCheck } from 'react-icons/fa';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
    BarChart, Bar 
} from 'recharts';
import { Link } from 'react-router-dom';
import "../css/style.css";

function Businessanalytics() {

    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <div className='businessanalytics-container'>
            <h1 className='businessanalytics-heading-main'>Business Analytics</h1>
            <div className='businessanalytics-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h4>Date Range</h4>
                        <FaRegCalendarAlt className="card_icon" /> 
                    </div>
                    <h3 className='card-num'>100</h3>
                </div>

             
                <div className='card'>
                    <div className='card-inner'>
                        <h4>Last 30 Days</h4>
                        <FaHistory className="card_icon" /> 
                    </div>
                    <h3 className='card-num'>200</h3>
                </div>

               
                <div className='card'>
                    <div className='card-inner'>
                        <h4>Apply Filter</h4>
                        <FaFilter className="card_icon" /> 
                    </div>
                    <h3 className='card-num'>300</h3>
                </div>

            
                <div className='card'>
                    <div className='card-inner'>
                        <h4>Custom Option</h4>
                        <FaUserCheck className="card_icon" /> 
                    </div>
                    <h3 className='card-num'>400</h3>
                </div>
            </div>

            <h1 className='businessanalytics-heading'>Meeting Attendance Over Time</h1>
            <div className='charts'>
                <div className='chart-row'>
                <ResponsiveContainer width="100%" height={300} className="center-chart" style={{ marginTop: '40px' }}>
                <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
                 </ResponsiveContainer>
                    <h1 className='businessanalytics-heading'>Project Progress Report</h1>
                    <ResponsiveContainer width="100%" height={300} className="center-chart" style={{ marginTop: '60px' }}>
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>


            <div className="stats-container">
                <div className="stat-card">
                    <h4>Meeting Hold</h4>
                    <div className="stat-content">
                        <h3>15</h3>
                        <p>Total meetings held this month</p>
                    </div>
                </div>

                <div className="stat-card">
                    <h4>Task Complete</h4>
                    <div className="stat-content">
                        <h3>35</h3>
                        <p>Tasks completed in the last 30 days</p>
                    </div>
                </div>

                <div className="stat-card">
                    <h4>Client Engaged</h4>
                    <div className="stat-content">
                        <h3>50</h3>
                        <p>Clients actively engaged this quarter</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Businessanalytics;
 */


import React, { useState } from "react";
import "../css/style.css";

const BusinessAnalytics = () => {
  const [popup, setPopup] = useState(null);

  const openPopup = (id) => {
    setPopup(id);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <div className="businessanalytics-container">
      <h1 className="businessanalytics-page-heading">Business Analytics Dashboard</h1>

      <div className="businessanalytics-options">
        <div className="businessanalytics-page-grid">
          {/* Scenario: Market Down */}
          <div className="businessanalytics-page-card card-first" onClick={() => openPopup(1)}>
            <div className="card-inner">
              <div className="card_icon">📉</div>
              <div>
                <h4>If Scenario: Market Down</h4>
                <p>Schedule aggressive client meetings (2-20%) during market downturns.</p>
              </div>
            </div>
          </div>

          {/* Last Meeting Since 3 Months */}
          <div className="businessanalytics-page-card card-second" onClick={() => openPopup(2)}>
            <div className="card-inner">
              <div className="card_icon">⏳</div>
              <div>
                <h4>Last Meeting Since 3 Months</h4>
                <p>Reconnect clients not met in 3+ months. Schedule 12 meetings.</p>
              </div>
            </div>
          </div>

          {/* High Net Worth Investor */}
          <div className="businessanalytics-page-card card-third" onClick={() => openPopup(3)}>
            <div className="card-inner">
              <div className="card_icon">💼</div>
              <div>
                <h4>High Net Worth Investor</h4>
                <p>Provide personalized services to High Net Worth Investors.</p>
              </div>
            </div>
          </div>

          {/* Customer Behaviour Analysis */}
          <div className="businessanalytics-page-card card-fourth" onClick={() => openPopup(4)}>
            <div className="card-inner">
              <div className="card_icon">📊</div>
              <div>
                <h4>Customer Behaviour Analysis</h4>
                <p>Analyze and respond to customer behaviors effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popups */}
      {popup && (
        <div className="businessanalytics-page-popup">
          <div className="businessanalytics-page-popup-content">
            {popup === 1 && (
              <>
                <h2>Scenario: Market Down</h2>
                <p>
                  During market downturns, prioritize 2-20% of key clients for aggressive meetings to maintain relationships and mitigate risks.
                </p>
              </>
            )}
            {popup === 2 && (
              <>
                <h2>Last Meeting Since 3 Months</h2>
                <p>
                  Clients who haven’t met in over 3 months require re-engagement. Schedule 12 meetings to strengthen relationships and explore new opportunities.
                </p>
                <button className="businessanalytics-schedule-meeting">Schedule Meeting</button>
              </>
            )}
            {popup === 3 && (
              <>
                <h2>High Net Worth Investor</h2>
                <p>
                  Offer tailored services and personalized investment strategies to meet the unique needs of High Net Worth Investors.
                </p>
              </>
            )}
            {popup === 4 && (
              <>
                <h2>Customer Behaviour Analysis</h2>
                <p>
                  Analyze customer behaviors to enhance engagement and drive better outcomes. Use data-driven insights to refine strategies.
                </p>
              </>
            )}
            <button className="businessanalytics-page-popup-close" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessAnalytics;
