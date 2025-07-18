import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        width: '100%',
        background: 'linear-gradient(90deg, #0f2027 0%, #2c5364 100%)',
        boxShadow: '0 2px 8px rgba(44,83,100,0.15)',
        padding: '0.5rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.7rem', color: '#fbbf24', letterSpacing: '2px' }}>
          Poverty-Line
        </div>
        <ul
          style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink to="/" end style={navStyle}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" style={navStyle}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/records" style={navStyle}>Records</NavLink>
          </li>
          <li>
            <NavLink to="/user" style={navStyle}>User</NavLink>
          </li>
          <li>
            <NavLink to="/login" style={navStyle}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/register" style={navStyle}>Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const navStyle = ({ isActive }) => ({
  color: isActive ? '#fbbf24' : '#fff',
  background: isActive ? 'rgba(251,191,36,0.15)' : 'transparent',
  padding: '0.5rem 1.2rem',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  transition: 'background 0.2s, color 0.2s',
  boxShadow: isActive ? '0 2px 8px rgba(251,191,36,0.12)' : 'none',
});

export default Navbar;
