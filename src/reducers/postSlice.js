import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../api/reddit";


export const getPostsAsync = createAsyncThunk(
    'posts/getPosts',
    async ( subRedditUrl ) => {
        const data = await getPosts(subRedditUrl)
        return data
    }
)

export const searchByTerm = ( searchTerm ) => ({
    type: 'posts/setSearchTerm',
    payload: searchTerm
})

export const postSlice = createSlice({
    name: 'posts',
    initialState: { 
        posts: [],
        searchTerm: ''
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getPostsAsync.fulfilled, (state, action) => {
            console.log(action.payload);
            state.posts = action.payload
          })
    }
})
 
export const selectPosts = ( state ) => state.posts.posts

export const selectSearchTerm = ( state ) => state.posts.searchTerm

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
          return posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        return posts
    }
)