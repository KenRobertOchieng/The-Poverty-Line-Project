import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import './index.css';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  return token ? children : <Navigate to="/" replace />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <ProtectedRoute><HomePage /></ProtectedRoute>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);