import React, { useState } from 'react'
import { formatNumber } from '../../utils/formatNumber'
import style from './Ratings.module.css'

export const Ratings = ({ ups }) => {
  const [upsToggle, setUpsToggle] = useState(false)
  const [downsToggle, setDownsToggle] = useState(false)

  const handleUpsToggle = () => {
    if (downsToggle) {
      handleDownsToggle()
    }
    setUpsToggle( !upsToggle )
  }

  const handleDownsToggle = () => {
    if (upsToggle) {
      handleUpsToggle()
    }
    setDownsToggle( !downsToggle )
  }

  return (
    <div className={style.container}>
      <i 
       className="fa-regular fa-circle-up"
       style={{color: `${upsToggle ? '#45b81f' : ''}`}}
       onClick={ handleUpsToggle }
       role='button' >
      </i>

      <span style={{ 
        color: `${ upsToggle ? 'green' : downsToggle ? 'red' : ''}`
      }}>{ formatNumber(ups) }</span>
  
      <i
        className="fa-regular fa-circle-down"
        style={{color: `${downsToggle ? '#ff304f' : ''}`}}
        onClick={ handleDownsToggle }
        rule='button'>
      </i>
    </div>
  )
}
