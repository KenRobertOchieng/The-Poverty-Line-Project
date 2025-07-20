// src/features/records/recordSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Thunks to hit your REST API
export const fetchRecords = createAsyncThunk(
  'records/fetchAll',
  async () => {
    const res = await fetch('http://localhost:5000/records')
    if (!res.ok) throw new Error('Failed to fetch')
    const data = await res.json()
    // assume backend returns { records: [...] }
    return data.message
  }
)

export const createRecord = createAsyncThunk(
  'records/create',
  async (recordData) => {
    const res = await fetch('http://localhost:5000/records', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recordData),
    })
    if (!res.ok) throw new Error('Failed to create')
    return await res.json()        // returns the new record object
  }
)

export const updateRecord = createAsyncThunk(
  'records/update',
  async ({ id, ...changes }) => {
    const res = await fetch(`http://localhost:5000/records/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changes),
    })
    if (!res.ok) throw new Error('Failed to update')
    return await res.json()        // returns the updated record
  }
)

export const deleteRecord = createAsyncThunk(
  'records/delete',
  async (id) => {
    const res = await fetch(`http://localhost:5000/records/${id}`, {
      method: 'DELETE'
    })
    if (!res.ok) throw new Error('Failed to delete')
    const json = await res.json();
    return json.id; 
  }
)

const initialState = {
  records: [],
  status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
}

const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // -- fetch all
      .addCase(fetchRecords.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRecords.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.records = action.payload
      })
      .addCase(fetchRecords.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })

      // -- create
      .addCase(createRecord.fulfilled, (state, action) => {
        state.records.push(action.payload)
      })

      // -- update
      .addCase(updateRecord.fulfilled, (state, action) => {
        const idx = state.records.findIndex(r => r.id === action.payload.id)
        if (idx !== -1) state.records[idx] = action.payload
      })

      // -- delete
      .addCase(deleteRecord.fulfilled, (state, action) => {
        state.records = state.records.filter(r => r.id !== action.payload)
      })
  }
})

export default recordsSlice.reducer
