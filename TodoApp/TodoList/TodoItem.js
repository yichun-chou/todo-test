import React from 'react'

function TodoItem(props) {
  const { id, done, item, listItems, setListItems, toggleDone, delTodo } = props
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
          setListItems(toggleDone(listItems, id))
        }}
      />
      {item} <button>edit</button>{' '}
      <button
        onClick={() => {
          setListItems(delTodo(listItems, id))
        }}
      >
        del
      </button>
    </li>
  )
}

export default TodoItem
