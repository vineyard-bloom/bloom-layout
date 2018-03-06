import React from 'react'

import spinner from './spinner.png'
import './loading.scss'

const Loading = () => {
  return (
    <img src={spinner} alt='This section is loading.' className='Loading' />
  )
}

export default Loading
