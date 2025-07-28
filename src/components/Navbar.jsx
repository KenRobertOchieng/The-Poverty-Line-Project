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

  const handleLogout = () => {
    dispatch(resetAuthState());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  // Define links for authenticated and unauthenticated users
  const publicLinks = [
    { to: '/', label: 'Home' },
    { to: '/login', label: 'Login' },
    { to: '/register', label: 'Register' },
  ];

  const authenticatedLinks = [
    { to: '/', label: 'Home' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/records', label: 'Records' },
    { to: '/users', label: 'Users' },
  ];

  const navLinks = isAuthenticated ? authenticatedLinks : publicLinks;

  return (
    <nav style={{
      width: '100%',
      background: 'transparent',
      padding: '0.75rem 0',
      marginBottom: '2rem',
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
        {/* Home link on the left */}
        <Link
          to="/"
          style={{
            color: location.pathname === '/' ? '#fbbf24' : '#fff',
            background: location.pathname === '/' ? 'rgba(251,191,36,0.15)' : 'transparent',
            padding: '0.5rem 1.2rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'background 0.2s, color 0.2s',
            boxShadow: location.pathname === '/' ? '0 2px 8px rgba(251,191,36,0.12)' : 'none',
          }}
        >
          Home
        </Link>
        
        {/* Other links on the right */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.filter(link => link.to !== '/').map(link => (
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
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              style={{
                color: '#fff',
                background: 'transparent',
                padding: '0.5rem 1.2rem',
                borderRadius: '6px',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(239,68,68,0.15)';
                e.target.style.color = '#ef4444';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#fff';
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
