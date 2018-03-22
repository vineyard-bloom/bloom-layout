import React from 'react'
import {
  Accordion,
  Alert,
  Loading,
  Modal,
  Table,
  Tooltip
} from 'bloom-layout'

const Example = ({ activeAlert, closeAlert, closeModal, modalContents, openAlert, openModal }) => {
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
