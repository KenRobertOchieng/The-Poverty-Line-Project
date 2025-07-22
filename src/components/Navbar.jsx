import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/profile', label: 'Profile' },
    { to: '/login', label: 'Login' },
    { to: '/register', label: 'Register' },
    { to: '/records', label: 'Records' },
    { to: '/users', label: 'Users' },
    { to: '/notfound', label: 'NotFound' },
  ];

  return (
    <nav style={{
      width: '100%',
      background: 'linear-gradient(90deg, #0f2027 0%, #2c5364 100%)',
      boxShadow: '0 2px 8px rgba(44,83,100,0.15)',
      padding: '1rem 0',
      marginBottom: '2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fbbf24', letterSpacing: '2px' }}>
          PovertyLine
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: location.pathname === link.to ? '#fbbf24' : '#fff',
                background: location.pathname === link.to ? 'rgba(251,191,36,0.15)' : 'transparent',
                padding: '0.5rem 1.2rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'background 0.2s, color 0.2s',
                boxShadow: location.pathname === link.to ? '0 2px 8px rgba(251,191,36,0.12)' : 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
