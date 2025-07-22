import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', formData);
    navigate('/home');
  };

  return (
    <div className='login-container'>
      <div className='login-header'>
        <h2 className='login-title'>Poverty Line</h2>
        <p className='welcoming-text'>A STEP TOWARDS ERADICATING POVERTY</p>
        <div className='divider-container'>
          <div className='divider-line'></div>
        </div>
      </div>

      <form className='login-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="username" className='form-label'>Username or email address</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username or email"
            className='form-input'
            required
          />
        </div>

        <div className='form-group password-group'>
          <label htmlFor="password" className='form-label'>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className='form-input'
            required
          />
        </div>

        <div className='form-group remember-me'>
          <input 
            type="checkbox" 
            id="rememberMe" 
            name="rememberMe" 
            checked={formData.rememberMe}
            onChange={handleChange}
            className="checkbox-input" 
          />
          <label htmlFor="rememberMe" className="checkbox-label">Remember me</label>
        </div>

        <button type='submit' className='submit-button'>Log in</button>
        <div className="forgot-password">
          <a href="#" className="forgot-password-link">Forgot password?</a>
        </div>
      </form>

      <p className='login-footer'>You and me both trying to save our society</p>
    </div>
  );
}

export default LoginForm;