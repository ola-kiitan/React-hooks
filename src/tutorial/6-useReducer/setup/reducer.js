export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'items added',
    }
  }
  if (action.type === 'EMPTY') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'add an item',
    }
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    }
  }
  if (action.type === 'REMOVE') {
    const filtered = state.people.filter(
      (person) => person.id !== action.payload
    )
    return {
      ...state,
      people: filtered,
    }
  }
}
