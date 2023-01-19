import React from 'react'
import { useSelector } from 'react-redux'
import { selectComments } from '../../reducers/commentSlice'
import { formatDate } from '../../utils/formatDate'

export const Commets = ({ postId }) => {
  const commentsData = useSelector(selectComments)
  const comments = commentsData[postId]

  return (
    <div>
      {
        comments
          ? comments.map(( data, idx ) => (
            <div key={idx}>
              <p> { data.author } </p>
              <p>{ data.body }</p>
              <p>{ formatDate(data.created) }  hours ago </p>
            </div>
          )) 
          : (<p>no hay datos</p>)
      }
    </div>
  )
}
