import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubReddits } from "../api/reddit";


export const getSubRedditsAsync = createAsyncThunk(
    'subReddit/getSubReddits',
    async () => {
        const json = await getSubReddits()
        return json
    }
)

export const subRedditSlice = createSlice({
    name: 'subReddits',
    initialState: { subReddits: [] },
    extraReducers: (builder) => {
        builder
          .addCase(getSubRedditsAsync.fulfilled, (state, action) => {
            state.subReddits = action.payload
          })
    }
})

// seleciona el estado actual de subReddits
export const selectSubReddits = (state) => state.subReddits.subReddits