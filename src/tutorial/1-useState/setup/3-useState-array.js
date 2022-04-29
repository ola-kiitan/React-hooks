import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const [userInput, setUserInput] = useState('')
  const handleDelete = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = { id: 9832, name: userInput }
    setPeople((person) => [input, ...person])
    setUserInput('')
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => handleDelete(id)}>clear items</button>
          </div>
        )
      })}
      <form onSubmit={handleSubmit}>
        <input type='text' value={userInput} onChange={handleChange} />

        <button className='btn' type='submit'>
          add items
        </button>
      </form>
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray
