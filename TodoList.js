import React from 'react'
import { useState } from 'react'
import { v4 } from 'uuid'

function TodoApp() {
  const data = [
    { item: 'milk', count: 1, id: v4(), done: false },
    { item: 'apple', count: 2, id: v4(), done: false },
    { item: 'beef', count: 3, id: v4(), done: false },
  ]
  const filterStyle = ['all', 'checked', 'unchecked']
  const [listItems, setListItems] = useState(data)
  const [addItem, setAddItem] = useState('hi')
  const [currentFilter, setCurrentFilter] = useState('all')

  const addTodo = (arr) => {
    if (addItem === '') {
      return [...arr]
    } else {
      return [{ item: addItem, count: 1, id: v4(), done: false }, ...arr]
    }
  }
  const delTodo = (arr, id) => {
    return arr.filter((el) => {
      return el.id !== id
    })
  }

  const toggleDone = (arr, id) => {
    return arr.map((el) => {
      if (el.id === id) {
        return { ...el, done: !el.done }
      }
      return { ...el }
    })
  }

  return (
    <>
      <h3>ToDo List</h3>
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
      <ul>
        {listItems.map((el) => {
          return (
            <li
              key={el.id}
              style={{ listStyleType: 'none' }}
              className={el.done ? 'checked' : ''}
            >
              <input
                type="checkbox"
                name=""
                id=""
                checked={el.done}
                onChange={(e) => {
                  setListItems(toggleDone(listItems, el.id))
                }}
              />
              {el.item} <button>edit</button>{' '}
              <button
                onClick={() => {
                  setListItems(delTodo(listItems, el.id))
                }}
              >
                del
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp