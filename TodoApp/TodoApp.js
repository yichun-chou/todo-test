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
  const filterOptions = ['all', 'to do', 'done']
  const [currentFilter, setCurrentFilter] = useState('all')

  const [listItems, setListItems] = useState(data)
  // const [addItem, setAddItem] = useState('hi')

  // 原本的 addItem 被 item 取代，由於 "const [addItem, setAddItem] = useState('hi')" 被移至 App.js，設一個新的值來判斷用戶輸入的是否為空字串
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

  const getFilterTodos = (listItems, type) => {
    switch (type) {
      case 'to do':
        return listItems.filter((el) => !el.done)
      case 'done':
        return listItems.filter((el) => el.done)
      case 'all':
      default:
        return listItems
    }
    // if (type === 'to do') return listItems.filter((el) => !el.done)
    // if (type === 'done') return listItems.filter((el) => el.done)

    // return listItems
  }

  // for Add to simplify ur code
  const createNewItem = (newItem) => {
    return { item: newItem, count: 1, id: v4(), done: false }
  }

  const handleAddItem = (item) => {
    setListItems(addTodo(listItems, createNewItem(item)))
  }

  // for List
  const handleDelTodo = (id) => {
    setListItems(delTodo(listItems, id))
  }
  const handleToggleDone = (id) => {
    setListItems(toggleDone(listItems, id))
  }

  return (
    <>
      <h3>ToDo List</h3>
      {/* 為了簡化要傳遞到子元件的屬性，把只在該元件會用到的屬性打包成函式傳遞，避免寫一大串像是
        <Add 
          addItem={addItem}
          setAddItem={setAddItem} 
          listItems={listItems} 
          setListItems={setListItems} 
          addTodo={addTodo} 
        />
       */}
      <Add handleAddItem={handleAddItem} />
      <List
        listItems={getFilterTodos(listItems, currentFilter)}
        handleDelTodo={handleDelTodo}
        handleToggleDone={handleToggleDone}
      />
      {filterOptions.map((el, i) => {
        return (
          <button
            key={i}
            className={el === currentFilter ? 'selected' : ''}
            onClick={() => {
              setCurrentFilter(el)
            }}
          >
            {el}
          </button>
        )
      })}
    </>
  )
}

//hello
//hi
//can i open

export default TodoApp
