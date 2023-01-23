import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubReddits } from "../api/reddit";


export const getSubRedditsAsync = createAsyncThunk(
    'subReddit/getSubReddits',
    async () => {
        const json = await getSubReddits()
        return json
    }
)

export const setSelectedSubreddit = (subRedditUrl) => ({
    type: 'subReddits/setSelectedSubreddit',
    payload: subRedditUrl
})

export const subRedditSlice = createSlice({
    name: 'subReddits',
    initialState: { 
        subReddits: [],
        selectedSubreddit: '/r/Home/'
    },
    reducers: {
        setSelectedSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getSubRedditsAsync.fulfilled, (state, action) => {
            state.subReddits = action.payload
          })
    }
})

// seleciona el estado actual de subReddits
export const selectSubReddits = (state) => state.subReddits.subReddits
export const selectSelectedSubreddit = (state) => state.subReddits.selectedSubreddit