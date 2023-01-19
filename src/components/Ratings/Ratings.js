import React, { useState } from 'react'
import { formatNumber } from '../../utils/formatNumber'

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
    <div>
      <i 
       className="fa-solid fa-up-long"
       style={{color: `${ upsToggle ? 'green' : '' }`}}
       onClick={ handleUpsToggle }
       role='button' >
      </i>

      <span style={{ 
        color: `${ upsToggle ? 'green' : downsToggle ? 'red' : ''}`
      }}>{ formatNumber(ups) }</span>
  
      <i 
        className="fa-solid fa-down-long"
        style={{color: `${ downsToggle ? 'red' : '' }`}}
        onClick={ handleDownsToggle }
        rule='button' >
      </i>
    </div>
  )
}
