import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './SubReddits.module.css'
import { getSubRedditsAsync, selectSubReddits } from '../../reducers/subRedditsSlice'
import { getPostsAsync } from '../../reducers/postSlice' 


export const SubReddits = () => {
  const dispatch = useDispatch()
  const subReddits = useSelector( selectSubReddits )

  useEffect(() => {
    dispatch( getSubRedditsAsync() )
  }, [dispatch])

  const handleClick = ( subRedditUrl ) => {
    dispatch( getPostsAsync(subRedditUrl) )
  }

  console.log(subReddits);
  return (
    <aside className={style.menu}>
      {
        subReddits.map( subReddit => (
          <div 
            role='button' 
            onClick={ () => handleClick(subReddit.url) }
          >
            <p>{ subReddit.title }</p>
          </div>
        ))
      }
    </aside>
  )
}
