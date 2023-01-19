import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCommentAsync } from '../../reducers/commentSlice'
import { formatDate } from '../../utils/formatDate'
import { Commets } from '../Comments/Commets'
import { Ratings } from '../Ratings/Ratings'

export const Post = ({ data }) => {
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
    <div> 
      <Ratings ups={ data.ups }/>

      <h3>{ data.title }</h3>
      <div>
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
      <p>{ data.author }</p>
      <p>{ formatDate(data.created) } hours ago</p>
      <span>{ data.num_comments}</span>
      <button type='button' onClick={ getComments }>
        <i className="fa-regular fa-message"></i>
      </button>
      
      { toggleComment && <Commets postId={ data.id } /> }
    </div>
  )
}
