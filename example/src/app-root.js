import React from 'react'
import ReactDOM from 'react-dom'

import Example from 'components'

class AppRoot extends React.Component {
  render() {
    return (
      <Example />
    )
  }
}

var docRoot = document.getElementById('root')

ReactDOM.render(<AppRoot />, docRoot)