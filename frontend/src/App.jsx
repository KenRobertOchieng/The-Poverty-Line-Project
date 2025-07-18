import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound, { RecordsPage, UserPage } from '../src/pages/NotFound';
import HomePage from '../src/pages/HomePage';
import Dashboard from '../src/pages/Dashboard';
import LoginPage from '../src/pages/LoginPage';
import RegisterPage from '../src/pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/records" element={<RecordsPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;