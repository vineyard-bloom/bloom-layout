import React from 'react'

import Example from './presentation/example'

class ExampleContainer extends React.Component {
  state = {
    modalContents: null,
    activeAlert: null
  }

  closeModal = () => {
    this.setState({
      modalContents: null
    })
  }

  openAlert = () => {
    this.setState({
      activeAlert: 'Boop!'
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
        closeModal={this.closeModal}
        openAlert={this.openAlert}
        openModal={this.openModal}
        { ...this.state }
      />
    )
  }
}

export default ExampleContainer
