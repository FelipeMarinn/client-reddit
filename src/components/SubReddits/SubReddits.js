import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './SubReddits.module.css'
import { getPostsAsync } from '../../reducers/postSlice' 
import { 
  selectSubReddits, 
  getSubRedditsAsync, 
  setSelectedSubreddit, 
  selectSelectedSubreddit
} from '../../reducers/subRedditsSlice'


export const SubReddits = () => {
  const dispatch = useDispatch()
  const subReddits = useSelector( selectSubReddits )
  const selectedSubreddit = useSelector( selectSelectedSubreddit )

  useEffect(() => {
    dispatch( getSubRedditsAsync() )
  }, [dispatch])

  const handleClick = ( subRedditUrl ) => {
    dispatch( getPostsAsync(subRedditUrl) )
    dispatch( setSelectedSubreddit(subRedditUrl) )
  }

  console.log(subReddits);
  return (
    <div className={style.container}>
      <div className={style.titleContainer}> 
        <h2>SubReddits</h2>
      </div>
      <ul>
        {
          subReddits.map( subReddit => (
            <li
              className={
                selectedSubreddit === subReddit.url && style.selectedSubreddit
              }
              key={ subReddit.id }>
              <button 
                onClick={ () => handleClick(subReddit.url) }
                type='button'
              >
                {
                  subReddit.icon_img ? <img 
                  src={subReddit.icon_img} 
                  alt={ subReddit.display_name }/>
                  : <div className={style.icon} />
                }
                { subReddit.display_name }
              </button>
            </li>
          ))
      }
      </ul>
    </div>
  )
}
