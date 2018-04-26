import React from 'react'
import PropTypes from 'prop-types'

import './progress-bar.scss'

const ProgressBar = ({ current, id, min = 0, max }) => {
  const fillWidth = `${(current / (max - min)).toFixed(8) * 100}%`
  const fillStyle = {
    width: fillWidth
  }

  if (current.toString() === max.toString()) {
    fillStyle.borderRadius = '10px'
    fillStyle.width = `calc(${fillWidth} + 2px)`
  }

  return (
    <div className='ProgressBar' role='presentation' id={id}>
      <div
        className='ProgressBar-fill'
        aria-labelledby={`${id}-fill`}
        style={fillStyle}
      >
        <span className='u-sr-only' id={`${id}-fill`}>
          {current} out of {max}
        </span>
      </div>
    </div>
  )
}

// all strings (except id) should be bignumber strings
ProgressBar.propTypes = {
  current: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

ProgressBar.defaultProps = {
  min: 0
}

export default ProgressBar
