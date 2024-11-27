import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';  
import Clientprofile from './pages/Clientprofile';
import Home from './pages/Home'; 
import AddeditMeeting from './pages/AddeditMeeting'; 
import Businessanalytics from './pages/Businessanalytics';
import Clock from './components/Clock'
import Inprogress from './pages/Inprogress';
import Importantmeetings from './pages/Importantmeetings';

function App() {
  const location = useLocation();

  return (
    <>
     
      {location.pathname !== '/' && location.pathname !== '/login' && <Navbar />}
      
      <Routes>
       
        <Route path="/login" element={<Login />} />
        
       
        <Route path="/home" element={<Home />} />
        <Route path="/clientprofile" element={<Clientprofile/>} />
        <Route path="/addeditmeeting" element={<AddeditMeeting />} />
        <Route path="/businessanalytics" element={<Businessanalytics />} />
        <Route path="/clock" element={< Clock />} />
        <Route path="/inprogress" element={<  Inprogress />} />
        <Route path="/importantmeetings" element={<    Importantmeetings />} />
        <Route path="/" element={<Login />} />
      </Routes>

      
      {location.pathname !== '/' && location.pathname !== '/login' && <Footer />}
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
