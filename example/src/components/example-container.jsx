import React from 'react'

import Example from './presentation/example'

class ExampleContainer extends React.Component {
  state = {
    modalContents: null,
    activeAlert: null
  }

  closeAlert = () => {
    this.setState({
      activeAlert: null
    })
  }

  closeModal = () => {
    this.setState({
      modalContents: null
    })
  }

  openAlert = () => {
    this.setState({
      activeAlert: { message: 'Boop!' }
    })
  }

  openModal = () => {
    this.setState({
      modalContents: <div>Example Modal</div>
    })
  }

  render() {
    return (
      <Example
        closeAlert={this.closeAlert}
        closeModal={this.closeModal}
        openAlert={this.openAlert}
        openModal={this.openModal}
        { ...this.state }
      />
    )
  }
}

export default ExampleContainer
