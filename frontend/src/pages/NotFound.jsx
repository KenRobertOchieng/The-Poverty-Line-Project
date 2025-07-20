import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#374151', /* bg-gray-700 */
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e53e3e', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#f3f4f6', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', color: '#d1d5db', maxWidth: '500px', textAlign: 'center', marginBottom: '2rem' }}>
        Sorry, the page you are looking for does not exist. Let's get you back to making a difference!
      </p>
      <Link to="/" style={{
        padding: '0.75rem 2rem',
        background: '#3182ce',
        color: '#fff',
        borderRadius: '6px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(49,130,206,0.08)',
        transition: 'background 0.2s',
      }}>
        Go Home
      </Link>
      <div style={{ marginTop: '2rem', fontStyle: 'italic', color: '#9ca3af', fontSize: '1rem', maxWidth: '400px', textAlign: 'center' }}>
        "The best way to find yourself is to lose yourself in the service of others."<br />
        <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>- Mahatma Gandhi</span>
      </div>
    </div>
  );
};

export default NotFound;
