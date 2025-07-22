// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage     from './pages/HomePage'
import LoginPage    from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard    from './pages/Dashboard'
import Profile      from './pages/Profile'
import RecordsPage  from './pages/RecordsPage'
import UserPage     from './pages/UserPage'
import UsersPage    from './pages/UsersPage'
import NotFound     from './pages/NotFound'

import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import PrivateRoute  from './components/PrivateRoute'

import './index.css'

function App() {
  return (
    <Router>
      <div className="bg-gray-700 min-h-screen flex flex-col">
        <div style={{
          backgroundColor: '#1F2937',
          padding: '1rem 0',
          textAlign: 'center',
          borderBottom: '1px solid #374151'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#fbbf24',
            margin: 0,
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }}>
            The Poverty Line
          </h1>
          <p style={{
            fontSize: '0.9rem',
            color: '#9CA3AF',
            letterSpacing: '2px',
            marginTop: '0.25rem'
          }}>
            A STEP TOWARDS ERADICATING POVERTY
          </p>
        </div>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* public */}
            <Route path="/"         element={<HomePage />} />
            <Route path="/login"    element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* protected */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/records"
              element={
                <PrivateRoute>
                  <RecordsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/:userId"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UsersPage />
                </PrivateRoute>
              }
            />

            {/* catch‑all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
