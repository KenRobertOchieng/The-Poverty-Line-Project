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
