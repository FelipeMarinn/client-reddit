import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from '../reducers/postSlice';
import { commentSlice } from '../reducers/commentSlice';
import { subRedditSlice } from '../reducers/subRedditsSlice';

export const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    comments: commentSlice.reducer,
    subReddits: subRedditSlice.reducer
  },
});
