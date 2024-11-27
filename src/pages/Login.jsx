
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import crinigerTechnologiesLogo from '../assets/criniger-technologies-logo.png';
import '../css/login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-page"> 
      <div className="login-container">
        <div className="logo-container" aria-label="Company Logo">
          <img 
            src={crinigerTechnologiesLogo} 
            alt="Criniger Technologies Logo" 
            className="logo" 
          />
        </div>
        <div className="form-wrapper"> 
          <form>
            <h2 className='login-heading'>Access Gateway</h2>
            <div className="form-group">
              <label className='login-label' htmlFor="username">Username</label>
              <div className="login-input-container">
                <i className="fa fa-user"></i> 
                <input 
                  id="username"
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="form-group">
              <label className='login-label' htmlFor="password">Password</label>
              <div className="login-input-container">
                <i className="fa fa-lock"></i> 
                <input 
                  id="password"
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button className='login-btn' type="submit">Login</button>
            <div className="login-forgot-password">
              <a href="#">Forgot your password?</a>
            </div>

            <div className="signup-option">
              <a href="/signup">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
