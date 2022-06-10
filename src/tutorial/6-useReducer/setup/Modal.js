import React, { useEffect } from 'react'

const Modal = ({ modalContent, modalClose }) => {
  useEffect(() => {
    setTimeout(() => {
      modalClose()
    }, 3000)
  })

  return <div>{modalContent}</div>
}

export default Modal
