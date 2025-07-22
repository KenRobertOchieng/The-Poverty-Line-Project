// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer        from './features/auth/authSlice'
import recordsReducer     from './features/records/recordSlice'
import userListingReducer from './features/users/userListingSlice'

<<<<<<< HEAD
// 1) Grab any existing auth data from localStorage with error handling
let token, user;
try {
  token = localStorage.getItem('token');    // string or null
  const userStr = localStorage.getItem('user');
  user = userStr ? JSON.parse(userStr) : null;
} catch (error) {
  console.error('Error accessing localStorage:', error);
  token = null;
  user = null;
}
=======
// Safely read token
const token = localStorage.getItem('token') || null
>>>>>>> ccc0f54a16593b06ece7ffbbed38e6090fa202a3

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
<<<<<<< HEAD
  reducer: {
    auth:         authReducer,
    records:      recordsReducer,
    userListing:  userListingReducer,
  },
  preloadedState
})
=======
  reducer: { auth: authReducer, records: recordsReducer, userListing: userListingReducer },
  preloadedState,
})

>>>>>>> ccc0f54a16593b06ece7ffbbed38e6090fa202a3
