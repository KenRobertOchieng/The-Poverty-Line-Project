<<<<<<< HEAD
import HomePage from './pages/HomePage'
import "./index.css";
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';

=======
// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
>>>>>>> abcadbd1d6a0b7dbb446cccabe425290ccd65f6f

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
<<<<<<< HEAD
    <div className='bg-gray-700'>
      <LoginPage />
      <HomePage/>
      <Footer/>
    </div>
=======
    <Router>
      <div className="bg-blue-950 min-h-screen flex flex-col">
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
>>>>>>> abcadbd1d6a0b7dbb446cccabe425290ccd65f6f
  )
}

export default App
