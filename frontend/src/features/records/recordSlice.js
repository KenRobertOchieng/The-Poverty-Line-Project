import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    records: [], // Array to hold records
};

const recordSlice = createSlice({
    name:'records',
    initialState,
    reducers: {
        // Adding a new record
        addRecord: {
            reducer: (state, action)=> {
                state.records.push(action.payload);
            },
            prepare: (recordData) => ({
                payload: {
                    id: nanoid(),
                    ...recordData,
                },
            }),
        },

        updateRecord: (state, action) => {
            const indexToUpdate = state.records.findIndex(
                (record) => record.id === action.payload.id
            );
            if 
        }

    }
})