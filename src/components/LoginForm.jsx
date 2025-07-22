<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store token based on rememberMe choice
      const storage = formData.rememberMe ? localStorage : sessionStorage;
      storage.setItem('token', data.access_token);
      storage.setItem('user_id', data.user_id);

      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
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

      {error && <div className='error-message' style={{ color: 'red', textAlign: 'center', margin: '10px 0' }}>{error}</div>}

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
=======
import React from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { loginUser } from '../features/auth/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const resultAction = await dispatch(loginUser({ username, password }));
      const payload = unwrapResult(resultAction);

      // Persist token & user info
      localStorage.setItem('token', payload.access_token);
      localStorage.setItem('user', JSON.stringify(payload.user));

      // Redirect to the intended page
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Login failed:', err);
      // TODO: display error message to user
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#D1D5DB', fontWeight: '500' }}>
          Username or email address
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="admin"
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#374151', color: 'white', border: '1px solid #4B5563', borderRadius: '0.375rem', fontSize: '1rem', outline: 'none' }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#D1D5DB', fontWeight: '500' }}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="••••••••"
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#374151', color: 'white', border: '1px solid #4B5563', borderRadius: '0.375rem', fontSize: '1rem', outline: 'none' }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <input type="checkbox" id="rememberMe" name="rememberMe" style={{ marginRight: '0.5rem', accentColor: '#3B82F6' }} />
        <label htmlFor="rememberMe" style={{ fontSize: '0.875rem', color: '#D1D5DB' }}>
          Remember me
        </label>
      </div>

      <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#3B82F6', color: 'white', border: 'none', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', transition: 'background-color 0.2s', marginBottom: '1rem' }}>
        Log in
      </button>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <a href="#" style={{ color: '#3B82F6', fontSize: '0.875rem', textDecoration: 'none' }}>
          Forgot password?
        </a>
      </div>
    </form>
  );
}
>>>>>>> abcadbd1d6a0b7dbb446cccabe425290ccd65f6f
