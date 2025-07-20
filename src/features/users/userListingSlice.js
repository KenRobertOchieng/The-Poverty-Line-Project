import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API endpoint for users
const API_URL = 'http://localhost:5000/api';

// Fetch all users
export const fetchUsers = createAsyncThunk('userListing/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/users`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Fetch a single user by ID
export const fetchUserById = createAsyncThunk('userListing/fetchUserById', async (userId, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch user with ID: ${userId}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// If API is not yet available, use this function to get mock data
export const getMockUsers = () => {
  return [
    { id: 1, name: 'Eliud Rotich', email: 'eliud@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'John Smith', email: 'john@example.com' },
  ];
};

const userListingSlice = createSlice({
  name: 'userListing',
  initialState: {
    users: [],
    selectedUser: null,
    loading: false,
    error: null,
    searchTerm: '',
    sortBy: 'name',
    sortDirection: 'asc'
  },
  reducers: {
    // Set search term for filtering users
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    // Set sort criteria
    setSortCriteria: (state, action) => {
      const { sortBy, sortDirection } = action.payload;
      state.sortBy = sortBy;
      state.sortDirection = sortDirection;
    },
    // Use mock data when API is not available
    setMockUsers: (state) => {
      state.users = getMockUsers();
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      // Handle fetchUsers cases
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // Fallback to mock data if API fails
        state.users = getMockUsers();
      })
      // Handle fetchUserById cases
      .addCase(fetchUserById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearchTerm, setSortCriteria, setMockUsers } = userListingSlice.actions;

// Selector to get filtered and sorted users
export const selectFilteredUsers = (state) => {
  const { users, searchTerm, sortBy, sortDirection } = state.userListing;
  
  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort users based on sort criteria
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const valueA = a[sortBy] || '';
    const valueB = b[sortBy] || '';
    
    if (sortDirection === 'asc') {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });
  
  return sortedUsers;
};

export default userListingSlice.reducer;
