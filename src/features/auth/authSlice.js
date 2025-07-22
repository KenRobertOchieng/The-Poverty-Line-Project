// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Thunk for registering a new user
export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        return rejectWithValue(data.message || 'Registration failed')
      }
      return data
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

// Thunk for logging in an existing user
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }), 
      })
      const data = await res.json()
      if (!res.ok) {
        return rejectWithValue(data.message || 'Login failed')
      }
      return data
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,    // user info object
    token: null,   // JWT access token
    loading: false,
    error: null,
  },
  reducers: {
    // clear out auth state on logout
    resetAuthState: (state) => {
      state.user = null
      state.token = null
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    // Register flow
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
      })

    // Login flow
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.access_token
        state.user = action.payload.user
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
      })
  },
})

export const { resetAuthState } = authSlice.actions
export default authSlice.reducer
