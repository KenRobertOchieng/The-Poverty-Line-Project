// src/features/users/userListingSlice.js
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

const API_URL = 'http://localhost:5000'
const getMockUsers = () => [
  { id: 1, username: 'EliudRotich', email: 'eliud@example.com', timestamp: null },
  { id: 2, username: 'JaneDoe',     email: 'jane@example.com',  timestamp: null },
  { id: 3, username: 'JohnSmith',   email: 'john@example.com',  timestamp: null },
]

// Fetch all users
export const fetchUsers = createAsyncThunk(
  'userListing/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res  = await fetch(`${API_URL}/users`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Failed to fetch users')
      return data.message  // your backend returns { message: [ ... ] }
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

// Fetch one user by ID
export const fetchUserById = createAsyncThunk(
  'userListing/fetchUserById',
  async (userId, { rejectWithValue }) => {
    try {
      const res  = await fetch(`${API_URL}/users/${userId}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || `User ${userId} not found`)
      // sometimes backend wraps single in array
      return Array.isArray(data.message) ? data.message[0] : data.message
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
  searchTerm: '',
  sortBy: 'username',
  sortDirection: 'asc',
}

const userListingSlice = createSlice({
  name: 'userListing',
  initialState,
  reducers: {
    setSearchTerm:    (s, a) => { s.searchTerm = a.payload },
    setSortCriteria: (s, a) => {
      s.sortBy        = a.payload.sortBy
      s.sortDirection = a.payload.sortDirection
    },
    setMockUsers:     (s) => {
      s.users    = getMockUsers()
      s.loading  = false
      s.error    = null
    },
  },
  extraReducers: (builder) => {
    builder
      // ---- fetchUsers
      .addCase(fetchUsers.pending,   (s) =>   { s.loading = true;  s.error = null })
      .addCase(fetchUsers.fulfilled, (s, a) => { s.loading = false; s.users = a.payload })
      .addCase(fetchUsers.rejected,  (s, a) => { s.loading = false; s.error = a.payload; s.users = getMockUsers() })

      // ---- fetchUserById
      .addCase(fetchUserById.pending,   (s) =>   { s.loading = true;  s.error = null; s.selectedUser = null })
      .addCase(fetchUserById.fulfilled, (s, a) => { s.loading = false; s.selectedUser = a.payload })
      .addCase(fetchUserById.rejected,  (s, a) => { s.loading = false; s.error = a.payload })
  }
})

export const {
  setSearchTerm,
  setSortCriteria,
  setMockUsers,
} = userListingSlice.actions

// Input selectors
const selectUsers         = state => state.userListing.users
const selectSearchTerm    = state => state.userListing.searchTerm
const selectSortBy        = state => state.userListing.sortBy
const selectSortDirection = state => state.userListing.sortDirection

// Memoized, filtered + sorted list
export const selectFilteredUsers = createSelector(
  [ selectUsers, selectSearchTerm, selectSortBy, selectSortDirection ],
  (users = [], searchTerm, sortBy, sortDirection) => {
    const list = Array.isArray(users) ? users : []
    const filtered = list.filter(u =>
      u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return filtered.sort((a, b) => {
      const aVal = (a[sortBy] || '').toLowerCase()
      const bVal = (b[sortBy] || '').toLowerCase()
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDirection === 'asc' ?  1 : -1
      return 0
    })
  }
)

export default userListingSlice.reducer
