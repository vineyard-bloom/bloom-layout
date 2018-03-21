import React from 'react'
import {
  Accordion,
  Alert,
  Loading,
  Modal,
  Table,
  Tooltip
} from 'bloom-layout'

const Example = props => {
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
      <button onClick={props.openAlert}>Open Alert</button>
      <button onClick={props.openModal}>Open Modal</button>
    </div>
  )
}

export default Example
