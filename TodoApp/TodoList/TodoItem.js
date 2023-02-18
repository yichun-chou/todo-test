import React from 'react'

function TodoItem(props) {
  const { id, done, item, handleDelTodo, handleToggleDone } = props
  return (
    <li
      key={id}
      style={{ listStyleType: 'none' }}
      className={done ? 'active' : ''}
    >
      <input
        type="checkbox"
        name=""
        id=""
        checked={done}
        onChange={(e) => {
          //   setListItems(toggleDone(listItems, id))
          handleToggleDone(id)
        }}
      />
      {item} <button>edit</button>{' '}
      <button
        onClick={() => {
          //   setListItems(delTodo(listItems, id))
          handleDelTodo(id)
        }}
      >
        del
      </button>
    </li>
  )
}

export default TodoItem
