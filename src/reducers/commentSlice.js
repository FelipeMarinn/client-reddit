import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCommentsReddit } from "../api/reddit";


/* si la propiedad de comments existe 
devuelve el valor de la propiedad del estado comments
de lo contrario esperamos los datos y los retornamos */
export const getCommentAsync = createAsyncThunk(
    'comments/getComments',
    async ({ postId, subReddit }, { getState }) => {
        const { comments } = getState().comments

        if ( comments[postId] ) {
            return comments[postId]
        }

        const json = await getCommentsReddit({ 
            postId, subReddit
        })
        return json
    }
)

export const commentSlice = createSlice({
    name: 'comments',
    initialState: { comments: {} },
    extraReducers: (builder) => {
        builder
          .addCase(getCommentAsync.fulfilled, (state, action) => {
            console.log(action.payload);
            const parentId = action.payload[0].parent_id.substring(3)
            console.log(parentId);
            state.comments = { ...state.comments, [parentId]: action.payload }
          })
    }
})

export const selectComments = ( state ) => state.comments.comments