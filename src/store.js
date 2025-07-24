// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer        from './features/auth/authSlice'
import recordsReducer     from './features/records/recordSlice'
import userListingReducer from './features/users/userListingSlice'

// Safely read token
const token = localStorage.getItem('token') || null

// Safely read & parse user
let user = null
const storedUser = localStorage.getItem('user')
if (storedUser && storedUser !== 'undefined') {
  try {
    user = JSON.parse(storedUser)
  } catch {
    user = null
  }
}

const preloadedState = {
  auth: { user, token, loading: false, error: null }
}

export const store = configureStore({
  reducer: { auth: authReducer, records: recordsReducer, userListing: userListingReducer },
  preloadedState,
})

