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
      <div className="bg-blue-950 min-h-screen flex flex-col">
        {/* Title Section */}
        <div className="bg-blue-950 border-b border-blue-900 py-4 text-center">
          <h1 className="text-4xl font-extrabold text-amber-400 tracking-wider uppercase">The Poverty Line</h1>
          <p className="text-green-500 text-sm mt-1 font-medium">A STEP TOWARDS ERADICATING POVERTY</p>
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