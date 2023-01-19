import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../Post/Post';
import { 
  getPostsAsync, 
  selectFilteredPosts,
} from '../../reducers/postSlice';

export const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectFilteredPosts)

  useEffect(() => {
    dispatch( getPostsAsync('/r/memes') )
  }, [dispatch])

  console.log(posts);

  return (
    <main>
      {
        posts.length 
          ? posts.map(( post, idx) => (
            <Post data={ post } key={ idx } />
          )) 
          : <p>no hay datos</p>
      }
    </main>
   
  )
}
