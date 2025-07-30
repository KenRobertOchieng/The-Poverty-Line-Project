// src/components/PrivateRoute.jsx
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token)
  const location = useLocation()

  // if no token, redirect to /login, but remember where
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // otherwise render the protected page
  return children
}
