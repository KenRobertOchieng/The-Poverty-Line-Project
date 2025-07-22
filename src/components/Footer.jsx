import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer style={{
      backgroundColor: '#1F2937',
      borderTop: '1px solid #374151',
      padding: '2rem 0',
      marginTop: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{ color: '#fbbf24', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 'bold' }}>The Poverty Line</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>
              Working together to eradicate poverty through data-driven solutions and community engagement.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Social Media Icons */}
              <a href="#" style={{ color: '#9CA3AF', fontSize: '1.2rem' }} aria-label="Facebook">📱</a>
              <a href="#" style={{ color: '#9CA3AF', fontSize: '1.2rem' }} aria-label="Twitter">📧</a>
              <a href="#" style={{ color: '#9CA3AF', fontSize: '1.2rem' }} aria-label="Instagram">📊</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Home</Link></li>
              <li><Link to="/dashboard" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Dashboard</Link></li>
              <li><Link to="/records" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Records</Link></li>
              <li><Link to="/users" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Users</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Resources</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Documentation</a></li>
              <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Reports</a></li>
              <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Research</a></li>
              <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Case Studies</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Contact Us</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📍 123 Poverty Line Street</p>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📞 +254 123 456 789</p>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>✉️ info@povertyline.org</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>
            © {currentYear} The Poverty Line Project. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#9CA3AF', fontSize: '0.9rem', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#9CA3AF', fontSize: '0.9rem', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer