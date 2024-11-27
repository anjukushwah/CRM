import React from 'react';
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
