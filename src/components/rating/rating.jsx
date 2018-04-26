import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'

import star from 'inline-svgs/star.svg'

import './rating.scss'

const Rating = ({ currentRating, total, shapeSVG }) => {
  const stars = []

  for (var i = 0; i < total; i++) {
    let isFull = i < parseInt(currentRating)
    let isHalf = !isFull && i === parseInt(currentRating)
    stars.push(
      <span
        className={`Rating-shapeClipper ${isHalf ? 'has-half' : ''}`}
        style={{ width: `${1 / total * 100}%` }}
      >
        <SVGInline
          className={`Rating-shape ${isFull ? 'is-full' : ''}`}
          height='100%'
          key={`star-${i}`}
          svg={shapeSVG}
          width='100%'
        />
        {isHalf && (
          <SVGInline
            className={`Rating-shape ${isHalf ? 'is-half' : ''}`}
            height='100%'
            key={`star-${i}`}
            svg={shapeSVG}
            width='100%'
          />
        )}
      </span>
    )
  }

  return (
    <div className='Rating'>
      <span className='u-sr-only'>
        {currentRating} out of {total}
      </span>
      <span aria-hidden className='Rating-shapeWrapper'>
        {stars}
      </span>
    </div>
  )
}

Rating.defaultProps = {
  shapeSVG: star,
  total: 5
}

Rating.propTypes = {
  currentRating: function(props, propName, componentName) {
    if (props[propName] < 0 || props[propName] > props.total) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'. Should be greater than 0 and less than total.`
      )
    }
  },
  shapeSVG: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

export default Rating
