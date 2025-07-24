// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import recordsReducer from './features/records/recordSlice'
import userListingReducer from './features/users/userListingSlice'

// Grab any existing auth data from localStorage with error handling
let token, user;
try {
  token = localStorage.getItem('token');    // string or null
  const userStr = localStorage.getItem('user');
  user = userStr && userStr !== 'undefined' ? JSON.parse(userStr) : null;
} catch (error) {
  console.error('Error accessing localStorage:', error);
  token = null;
  user = null;
}

const preloadedState = {
  auth: { user, token, loading: false, error: null }
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    records: recordsReducer,
    userListing: userListingReducer,
  },
  preloadedState
})
