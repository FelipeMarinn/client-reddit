import React from 'react'
import { useSelector } from 'react-redux'
import { selectComments } from '../../reducers/commentSlice'
import { formatDate } from '../../utils/formatDate'
import style from './Comments.module.css'

export const Commets = ({ postId }) => {
  const commentsData = useSelector(selectComments)
  const comments = commentsData[postId]

  return (
    <div className={style.container}>
      {
        comments && comments.map(( data, idx ) => (
          <div key={idx} className={style.comment}>
            <div className={style.metadata}>
              <p> { data.author } </p>
              <p>{ formatDate(data.created) }  hours ago </p>
            </div>
            <p>{ data.body }</p>
          </div>
        )) 
      }
    </div>
  )
}
