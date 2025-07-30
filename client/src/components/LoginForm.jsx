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
