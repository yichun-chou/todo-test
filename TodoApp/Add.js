import React from 'react'
import { v4 } from 'uuid'

function Add(props) {
  const { addItem, setAddItem, handleAddItem } = props
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
          //   setListItems(addTodo(listItems))
          const newItem = { item: addItem, count: 1, id: v4(), done: false }
          handleAddItem(newItem)
          setAddItem('')
        }}
      >
        Add
      </button>
    </>
  )
}

export default Add
