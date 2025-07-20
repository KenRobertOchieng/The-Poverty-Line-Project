import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecordsPage from './pages/RecordsPage';
import UserPage from './pages/UserPage';
import NotFound from './pages/NotFound';
import UsersPage from './pages/UsersPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-700 min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/records" element={<RecordsPage />} />
            <Route path="/user/:userId" element={<UserPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
