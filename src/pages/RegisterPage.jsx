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
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Create your account
      </h1>

      <RegisterForm
        onSubmit={handleRegister}
        loading={loading}
        error={error}
        success={!!user}
      />
    </div>
  )
}

export default RegisterPage
