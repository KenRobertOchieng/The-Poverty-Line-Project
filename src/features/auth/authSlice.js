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
        // only send the fields your SQLAlchemy model expects
        body: JSON.stringify({ username, email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        // backend should return { message: '…' } on failure
        return rejectWithValue(data.message || 'Registration failed')
      }
      // assume data === { id, username, email, timestamp }
      return data
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,      // will hold { id, username, email, timestamp }
    loading: false,
    error: null,
  },
  reducers: {
    // clear out any leftover error / user state
    resetAuthState: (state) => {
      state.user = null
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        // action.payload is your returned user object
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
      })
  },
})

export const { resetAuthState } = authSlice.actions
export default authSlice.reducer
