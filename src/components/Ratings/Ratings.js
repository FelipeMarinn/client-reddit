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
      class="fa-solid fa-up-long"
      style={{color: `${ upsToggle ? 'green' : '' }`}}
      onClick={ handleUpsToggle } >
      </i>

      <span style={{ 
        color: `${ upsToggle ? 'green' : downsToggle ? 'red' : ''}`
      }}>{ formatNumber(ups) }</span>
  
      <i 
        class="fa-solid fa-down-long"
        style={{color: `${ downsToggle ? 'red' : '' }`}}
        onClick={ handleDownsToggle } >
      </i>
    </div>
  )
}
