import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import './banner-alert.scss'

const BannerAlert = props => {
  const { closeBanner, currentBanner } = props
  return (
    <div
      aria-atomic
      aria-relevant='additions removals'
      className={`BannerAlert-background ${!currentBanner ? 'is-hidden' : ''}`}
      role='alert'
      aria-live='assertive'
      aria-hidden={!currentBanner}
    >
      <Transition in={!!currentBanner} timeout={0}>
        {status => (
          <div
            className={`BannerAlert BannerAlert--${
              currentBanner ? currentBanner.style : ''
            } BannerAlert-fade-${status}`}
          >
            <div className='BannerAlert-text'>
              {currentBanner ? currentBanner : ''}
            </div>
            <a
              href='#'
              className='BannerAlert-close'
              onClick={closeBanner}
              tabIndex={!closeBanner ? -1 : 0}
            />
          </div>
        )}
      </Transition>
    </div>
  )
}

BannerAlert.propTypes = {
  closeBanner: PropTypes.func.isRequired,
  currentBanner: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default BannerAlert
