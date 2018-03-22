import React from 'react'

import Example from './presentation/example'

class ExampleContainer extends React.Component {
  state = {
    modalContents: null,
    activeAlert: null,
    activeBanner: 'This is a closeable Banner'
  }

  openModal = () => {
    this.setState({
      modalContents: <div>Example Modal</div>
    })
  }

  render() {
    return (
      <Example
        closeAlert={() => this.setState({ activeAlert: null })}
        closeBanner={() => this.setState({ activeBanner: null })}
        closeModal={() => this.setState({ modalContents: null })}
        openAlert={() => this.setState({ activeAlert: { message: 'Boop!' } })}
        openBanner={() => this.setState({ activeBanner: 'This is a closeable Banner' })}
        openModal={this.openModal}
        { ...this.state }
      />
    )
  }
}

export default ExampleContainer
