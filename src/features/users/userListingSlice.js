import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

const API_URL = 'http://localhost:5000'
const getMockUsers = () => [
  { id: 1, username: 'EliudRotich', email: 'eliud@example.com', timestamp: null },
  { id: 2, username: 'JaneDoe',     email: 'jane@example.com',  timestamp: null },
  { id: 3, username: 'JohnSmith',   email: 'john@example.com',  timestamp: null },
]

export const fetchUsers = createAsyncThunk(
  'userListing/fetchUsers',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    try {
      const res  = await fetch(`${API_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Failed to fetch users')
      return data.message  // backend returns { message: [ ... ] }
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const fetchUserById = createAsyncThunk(
  'userListing/fetchUserById',
  async (userId, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    try {
      const res  = await fetch(`${API_URL}/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || `User ${userId} not found`)
      // sometimes backend wraps single in array
      const user = Array.isArray(data.message) ? data.message[0] : data.message
      return user
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
    setSearchTerm:    (state, action) => { state.searchTerm = action.payload },
    setSortCriteria:  (state, action) => {
      state.sortBy        = action.payload.sortBy
      state.sortDirection = action.payload.sortDirection
    },
    setMockUsers:     (state) => {
      state.users    = getMockUsers()
      state.loading  = false
      state.error    = null
    },
  },
  extraReducers: (builder) => {
    builder
      // ---- fetchUsers
      .addCase(fetchUsers.pending,   (state) =>   { state.loading = true;  state.error = null })
      .addCase(fetchUsers.fulfilled, (state, action) => { state.loading = false; state.users = action.payload })
      .addCase(fetchUsers.rejected,  (state, action) => { state.loading = false; state.error = action.payload; state.users = getMockUsers() })

      // ---- fetchUserById
      .addCase(fetchUserById.pending,   (state) =>   { state.loading = true;  state.error = null; state.selectedUser = null })
      .addCase(fetchUserById.fulfilled, (state, action) => { state.loading = false; state.selectedUser = action.payload })
      .addCase(fetchUserById.rejected,  (state, action) => { state.loading = false; state.error = action.payload })
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
