import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync, selectFilteredPosts } from '../../reducers/postSlice'
import { selectSelectedSubreddit } from '../../reducers/subRedditsSlice'
import { Card } from '../Card/Card'
import { Ratings } from '../Ratings/Ratings'
import style from './Post.module.css'

export const Post = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectFilteredPosts)
  const selectedSubreddit = useSelector( selectSelectedSubreddit )

  useEffect(() => {
    dispatch( getPostsAsync(selectedSubreddit) )
  }, [dispatch, selectedSubreddit])

  return ( 
    <>
       {
        posts.length && posts.map(( post, idx) => (
          <article>
            <div className={style.container}>
              <Ratings ups={ post.ups }/>
              <Card data={ post } key={ idx } />
            </div>
          </article>
        )) 
      }
    </>
  )
}
