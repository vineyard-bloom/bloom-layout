import React from 'react'
import {
  Accordion,
  Alert,
  BannerAlert,
  Loading,
  Modal,
  Table,
  Tooltip
} from 'bloom-layout'

const Example = ({ activeAlert, activeBanner, closeAlert, closeBanner, closeModal, modalContents, openAlert, openBanner, openModal }) => {
  const accordionSections = [
    {
      contents: <div>I am contents</div>,
      header: 'Section 1'
    },
    {
      contents: <div>I am more contents</div>,
      header: 'Section 2'
    }
  ]

  return (
    <div>
      <BannerAlert
        closeBanner={closeBanner}
        currentBanner={activeBanner}
      />
      { !activeBanner &&
        <button onClick={openBanner}>
          reopen banner
        </button>
      }
      <Accordion
        sections={accordionSections}
      />
      <button onClick={openAlert}>Open Alert</button>
      <button onClick={openModal}>Open Modal</button>
      <Modal modalContents={modalContents}
        closeModal={closeModal}
      />
      <Alert
        closeAlert={closeAlert}
        currentAlert={activeAlert}
        hidden={!activeAlert}
      />
    </div>
  )
}

export default Example
