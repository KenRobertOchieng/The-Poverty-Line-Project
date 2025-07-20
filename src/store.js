<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import userListingReducer from './features/users/userListingSlice';

const store = configureStore({
  reducer: {
    userListing: userListingReducer,
  },
});

export default store;
=======
// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer    from './features/auth/authSlice'
import recordsReducer from './features/records/recordSlice'

export const store = configureStore({
  reducer: {
    auth:    authReducer,    // for state.auth.loading, error, user
    records: recordsReducer, // for state.records.records, status, error
  },
})
>>>>>>> 8d41d962b0ad454f8ef351770add259fd2a2f6f2
