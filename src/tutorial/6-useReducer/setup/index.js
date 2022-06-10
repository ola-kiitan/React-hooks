import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
import { reducer } from './reducer'
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      // setShowModal(true)
      // setPeople([...people, { id: new Date().getTime().toString(), name }])
      // setName('')
      const newPerson = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newPerson })
      setName('')
    } else {
      // setShowModal(true)
      dispatch({ type: 'EMPTY' })
    }
  }
  const handleChange = (e) => {
    setName(e.target.value)
  }
  const modalClose = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal modalClose={modalClose} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' value={name} onChange={handleChange} />
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div className='items'>
            <h1 key={person.id}>{person.name}</h1>
            <button
              onClick={() => dispatch({ type: 'REMOVE', payload: person.id })}
            >
              delete
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
