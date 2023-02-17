import React from 'react'
import { useState } from 'react'
import { v4 } from 'uuid'
import '../TodoApp.css'

import Add from './Add'
import List from './TodoList'

function TodoApp() {
  const data = [
    { item: 'milk', count: 1, id: v4(), done: false },
    { item: 'apple', count: 2, id: v4(), done: false },
    { item: 'beef', count: 3, id: v4(), done: false },
  ]
  const filterStyle = ['all', 'checked', 'unchecked']
  const [currentFilter, setCurrentFilter] = useState('all')

  const [listItems, setListItems] = useState(data)
  // const [addItem, setAddItem] = useState('hi')

  const addTodo = (arr, item) => {
    if (item.item === '') {
      return [...arr]
    } else {
      return [item, ...arr]
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

  // for Add to simplify ur code
  const handleAddItem = (item) => {
    setListItems(addTodo(listItems, item))
  }

  return (
    <>
      <h3>ToDo List</h3>
      <Add handleAddItem={handleAddItem} />
      <List
        listItems={listItems}
        setListItems={setListItems}
        delTodo={delTodo}
        toggleDone={toggleDone}
      />
    </>
  )
}

//hello
//hi
//can i open

export default TodoApp
