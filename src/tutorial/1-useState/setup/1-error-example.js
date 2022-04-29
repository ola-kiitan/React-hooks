import React from 'react'
import { useState } from 'react'

const ErrorExample = () => {
  const [title, setTitle] = useState('random title')
  const changeTitle = () => {
    if (title === 'random title') {
      setTitle('another title')
    } else {
      setTitle('random title')
    }
  }
  return (
    <div>
      <h2>{title}</h2>
      <button type='submit' onClick={changeTitle}>
        change title
      </button>
    </div>
  )
}

export default ErrorExample
