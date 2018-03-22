import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import './accordion.scss'

// I'm a hybrid because it makes sense
class Accordion extends React.Component {
  state = {
    openSection: 0
  };

  captureArrowKeys = e => {
    const key = e.which || e.keyCode
    const currentFocus = document.activeElement

    // only go to next header if we're focused on a header
    if (
      currentFocus &&
      [...currentFocus.classList].indexOf('Accordion-section-header') > -1
    ) {
      const currentSectionId = (currentFocus.id || '')
        .toString()
        .replace('-trigger-button', '')
        .replace('Accordion-section-', '')
        .replace(/-/g, ' ')
      const currentSectionIndex = this.props.sections
        .map(opt => opt.header.toLowerCase().replace(/-/g, ' '))
        .indexOf(currentSectionId)

      if (key === 40 && this.props.sections[currentSectionIndex + 1]) {
        // arrow down
        const nextOption = this.props.sections[currentSectionIndex + 1].header
          .toLowerCase()
          .replace(/\s/g, '-')
        const nextOptionElement = document.getElementById(
          `Accordion-section-${nextOption}-trigger-button`
        )
        if (nextOptionElement) {
          nextOptionElement.focus()
        }
      } else if (key === 38 && currentSectionIndex > 0) {
        // arrow up
        const prevOption = this.props.sections[currentSectionIndex - 1].header
          .toLowerCase()
          .replace(/\s/g, '-')
        const prevOptionElement = document.getElementById(
          `Accordion-section-${prevOption}-trigger-button`
        )
        if (prevOptionElement) {
          prevOptionElement.focus()
        }
      }
    }
  };

  triggerSection = index => {
    this.setState({
      openSection: index === this.state.openSection ? null : index
    })
  };

  componentWillReceiveProps = newProps => {
    if (
      newProps.defaultOpenSection &&
      newProps.defaultOpenSection !== this.props.defaultOpenSection
    ) {
      this.setState({
        openSection: newProps.defaultOpenSection
      })
    }
  };

  componentDidMount() {
    if (this.props.defaultOpenSection) {
      this.setState({
        openSection: this.props.defaultOpenSection
      })
    }
  }

  render() {
    const { className, sections } = this.props
    const { openSection } = this.state
    const accordionSections = sections.map((section, i) => {
      let isOpen = openSection === i
      let sectionId = `Accordion-section-${section.header
        .toLowerCase()
        .replace(/\s/g, '-')}`
      return (
        <li
          className={`Accordion-section ${isOpen ? 'is-open' : ''}`}
          key={sectionId}
          aria-expanded={isOpen}
        >
          <button
            className={`Accordion-section-header ${
              section.isValid ? 'is-valid' : ''
            } ${isOpen ? 'is-open' : ''}`}
            aria-controls={sectionId}
            id={`${sectionId}-trigger-button`}
            onClick={e => {
              e.preventDefault()
              this.triggerSection(i)
            }}
          >
            {section.header}
          </button>
          <Transition in={isOpen} timeout={0}>
            {status => (
              <div
                aria-hidden={!isOpen}
                aria-expanded={isOpen}
                aria-labelledby={`${sectionId}-trigger-button`}
                className={`Accordion-section-contents ${
                  isOpen ? 'is-open' : ''
                } Accordion-fold-${status}`}
                id={sectionId}
                role='region'
              >
                {section.contents
                  ? React.cloneElement(section.contents, {
                      triggerSection: this.triggerSection
                    })
                  : ''}
              </div>
            )}
          </Transition>
        </li>
      )
    })

    return (
      <div
        className={`Accordion ${className || ''}`}
        onKeyDown={this.captureArrowKeys}
      >
        <ul className='Accordion-sections'>{accordionSections}</ul>
      </div>
    )
  }
}

Accordion.propTypes = {
  className: PropTypes.string,
  defaultOpenSection: PropTypes.number,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      contents: PropTypes.element.isRequired,
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      isValid: PropTypes.bool
    }).isRequired
  ).isRequired
}

export default Accordion
