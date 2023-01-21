import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCommentAsync } from '../../reducers/commentSlice'
import { Commets } from '../Comments/Commets'
import { formatDate } from '../../utils/formatDate'
import style from './Card.module.css'

export const Card = ({ data }) => {

  const dispatch = useDispatch()
  const [toggleComment, setToggleComment] = useState(false)
  
  const getComments = () => {
    if ( toggleComment ) {
      setToggleComment(!toggleComment)
      return
    }
  
    const postId = data.id
    const subReddit =  data.subreddit
  
    dispatch( getCommentAsync({ postId, subReddit }) )
    setToggleComment(!toggleComment)
  }
   
  return (
    <div className={style.container}> 
      <h3>{ data.title }</h3>
      <div className={style.media}>
        { 
          data.is_video
            ? <video controls width={400} preload="auto">
                <source src={data.secure_media.reddit_video.dash_url}></source>
                <source src={data.secure_media.reddit_video.fallback_url}></source>
                <source src={data.secure_media.reddit_video.scrubber_media_url}></source>
                <source src={data.secure_media.reddit_video.hls_url}></source>
              </video> 
            : <img src={ data.url } alt='' width='320px'/> 
        }
      </div>
      <div className={style.datails}>
         <span>{ data.author }</span>
         <span>{ formatDate(data.created) } hours ago</span>
         <span>
           <button type='button' onClick={ getComments }>
             <i class="fa-regular fa-message"></i>
           </button>
           { data.num_comments }
          </span>
      </div>
      { toggleComment && <Commets postId={ data.id } /> }
    </div>
  )
}
