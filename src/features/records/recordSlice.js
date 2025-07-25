import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Fetch all records
export const fetchRecords = createAsyncThunk(
  'records/fetchAll',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    try {
      const res = await fetch('http://localhost:5000/records', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!res.ok) throw new Error('Failed to fetch records')
      const { message } = await res.json()
      return message
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

// Create record
export const createRecord = createAsyncThunk(
  'records/create',
  async (recordData, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    try {
      const res = await fetch('http://localhost:5000/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(recordData)
      })
      if (!res.ok) throw new Error('Failed to create record')
      return await res.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

// Update record (PATCH)
export const updateRecord = createAsyncThunk(
  'records/update',
  async ({ id, ...changes }, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    try {
      const res = await fetch(`http://localhost:5000/records/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(changes)
      })
      if (!res.ok) throw new Error('Failed to update record')
      return await res.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

// Delete record
export const deleteRecord = createAsyncThunk(
  'records/delete',
  async (id, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    try {
      const res = await fetch(`http://localhost:5000/records/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!res.ok) throw new Error('Failed to delete record')
      const { id: deletedId } = await res.json()
      return deletedId
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const recordsSlice = createSlice({
  name: 'records',
  initialState: { records: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRecords.pending, state => { state.status = 'loading' })
      .addCase(fetchRecords.fulfilled, (state, action) => { state.status = 'succeeded'; state.records = action.payload })
      .addCase(fetchRecords.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload })
      .addCase(createRecord.fulfilled, (state, action) => { state.records.push(action.payload) })
      .addCase(updateRecord.fulfilled, (state, action) => {
        const idx = state.records.findIndex(r => r.id === action.payload.id)
        if (idx !== -1) state.records[idx] = action.payload
      })
      .addCase(deleteRecord.fulfilled, (state, action) => {
        state.records = state.records.filter(r => r.id !== action.payload)
      })
  }
})

export default recordsSlice.reducer
