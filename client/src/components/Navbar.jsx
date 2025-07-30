// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetAuthState } from '../features/auth/authSlice';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector(state => state.auth);
  const isAuthenticated = !!(user && token);

  // Links for each side
  const leftLink = { to: '/', label: 'Home' };
  const publicRightLinks = [
    { to: '/login',    label: 'Login'    },
    { to: '/register', label: 'Register' },
  ];
  const authRightLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/records',   label: 'Records'   },
    { to: '/users',     label: 'Users'     },
  ];

  const handleLogout = () => {
    dispatch(resetAuthState());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav style={{
      width: '100%',
      background: 'linear-gradient(90deg, #0f2027 0%, #2c5364 100%)',
      boxShadow:  '0 2px 8px rgba(44,83,100,0.15)',
      padding:    '0.75rem 2rem',
      marginBottom: '2rem',
    }}>
      <div style={{
        display:       'flex',
        alignItems:    'center',
        justifyContent:'space-between',
        maxWidth:      '1200px',
        margin:        '0 auto',
      }}>
        {/* LEFT: always show Home */}
        <Link
          to={leftLink.to}
          style={{
            color:    location.pathname === leftLink.to ? '#fbbf24' : '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          {leftLink.label}
        </Link>

        {/* RIGHT: either public or auth */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {(isAuthenticated
            ? authRightLinks
            : publicRightLinks
          ).map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: location.pathname === link.to ? '#fbbf24' : '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'background 0.2s',
                background: location.pathname === link.to
                  ? 'rgba(251,191,36,0.15)'
                  : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* If logged in, show a Logout button */}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              style={{
                background: 'transparent',
                border:     '2px solid #fff',
                borderRadius: '6px',
                color:        '#fff',
                padding:      '0.4rem 0.8rem',
                fontWeight:   'bold',
                cursor:       'pointer',
                transition:   'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#fbbf24';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#fff';
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
