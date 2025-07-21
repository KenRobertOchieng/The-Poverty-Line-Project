// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer        from './features/auth/authSlice'
import recordsReducer     from './features/records/recordSlice'
import userListingReducer from './features/users/userListingSlice'

// 1) Grab any existing auth data from localStorage
const token = localStorage.getItem('token')    // string or null
const user  = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

// 2) Build a preloadedState for the auth slice
const preloadedState = {
  auth: {
    user: user,
    token: token,
    loading: false,
    error: null,
  }
}

export const store = configureStore({
  reducer: {
    auth:         authReducer,
    records:      recordsReducer,
    userListing:  userListingReducer,
  },
  preloadedState, 
})
