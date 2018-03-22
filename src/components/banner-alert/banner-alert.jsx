import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import './banner-alert.scss'

const BannerAlert = props => {
  const { closeBanner, currentBanner } = props
  return (
    <div
      tabIndex={-1}
      aria-atomic
      aria-relevant='additions removals'
      className={`BannerAlert-background ${props.hidden ? 'is-hidden' : ''}`}
      role='alert'
      aria-live='assertive'
    >
      <Transition in={!!currentBanner} timeout={0}>
        {status => (
          <div
            className={`BannerAlert BannerAlert--${
              currentBanner ? currentBanner.style : ''
            } BannerAlert-fade-${status}`}
          >
            <a href='#' onClick={closeBanner} className='Banner-Alert-close' />
            <div className='Alert-text'>
              {currentBanner ? currentBanner.message : ''}
            </div>
          </div>
        )}
      </Transition>
    </div>
  )
}

BannerAlert.propTypes = {
  closeBanner: PropTypes.func.isRequired,
  currentBanner: PropTypes.shape({
    message: PropTypes.oneOfType(PropTypes.string, PropTypes.element)
      .isRequired,
    style: PropTypes.string
  }),
  hidden: PropTypes.bool
}

export default BannerAlert
