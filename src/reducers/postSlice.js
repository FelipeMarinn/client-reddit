import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../api/reddit";


export const getPostsAsync = createAsyncThunk(
    'posts/getPosts',
    async ( subRedditUrl ) => {
        const data = await getPosts(subRedditUrl)
        return data
    }
)

// envia la carga util con el termino de busqueda
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
            state.posts = action.payload
          })
    }
})
 
// seleciona el estado actual de posts
export const selectPosts = ( state ) => state.posts.posts

// seleciona el estado actual de searchTerm
export const selectSearchTerm = ( state ) => state.posts.searchTerm

/* si searchTerm es diferente de un string vacio
filtrar los posts por termino de busqueda 
de lo contrario devuelve posts */
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