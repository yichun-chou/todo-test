import React from 'react'

function Add(props) {
  const { addItem, setAddItem, listItems, setListItems, addTodo } = props
  return (
    <>
      <label htmlFor="todo">todo: </label>
      <input
        type="text"
        id="todo"
        value={addItem}
        onChange={(e) => {
          console.log(e.target.value)
          setAddItem(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setListItems(addTodo(listItems))
          setAddItem('')
        }}
      >
        Add
      </button>
    </>
  )
}

export default Add
