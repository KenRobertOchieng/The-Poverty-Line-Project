// src/pages/RegisterPage.jsx
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RegisterForm from '../components/RegisterForm'
import { registerUser, resetAuthState } from '../features/auth/authSlice'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const { loading, error, user } = useSelector(state => state.auth)

  // Clear any leftover state on unmount
  useEffect(() => {
    return () => {
      dispatch(resetAuthState())
    }
  }, [dispatch])

  // Only pass the fields your slice expects
  const handleRegister = ({ username, email, password }) => {
    dispatch(registerUser({ username, email, password }))
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#374151',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '450px',
        width: '100%',
        backgroundColor: '#1F2937',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: 'white',
            marginBottom: '0.5rem'
          }}>
            Poverty Line
          </h2>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#9CA3AF',
            marginBottom: '2rem',
            letterSpacing: '1px'
          }}>
            A STEP TOWARDS ERADICATING POVERTY
          </p>
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <RegisterForm
            onSubmit={handleRegister}
            loading={loading}
            error={error}
            success={!!user}
          />
        </div>
        

      </div>
    </div>
  )
}

export default RegisterPage
