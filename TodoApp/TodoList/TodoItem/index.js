import React from 'react'
import Edit from './Edit'

function TodoItem(props) {
  const {
    id,
    done,
    item,
    editing,
    handleDelTodo,
    handleToggleDone,
    handleToggleEdit,
    handleSaveChange,
  } = props
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
      {editing ? (
        <Edit id={id} item={item} handleSaveChange={handleSaveChange} />
      ) : (
        <>
          {item}{' '}
          <button
            onClick={() => {
              handleToggleEdit(id)
            }}
          >
            edit
          </button>
        </>
      )}
      {/* <Edit item={item} />
      {item}
      <button>edit</button>{' '} */}
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
