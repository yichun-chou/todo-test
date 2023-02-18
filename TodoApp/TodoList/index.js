import React from 'react'
import TodoItem from './TodoItem'

function List(props) {
  const {
    listItems,
    handleDelTodo,
    handleToggleDone,
    handleToggleEdit,
    handleSaveChange,
  } = props
  return (
    <>
      <ul>
        {listItems.map((el) => {
          const { id, done, item, editing } = el
          return (
            <TodoItem
              key={id}
              id={id}
              done={done}
              editing={editing}
              item={item}
              handleDelTodo={handleDelTodo}
              handleToggleDone={handleToggleDone}
              handleToggleEdit={handleToggleEdit}
              handleSaveChange={handleSaveChange}
            />
          )
        })}
      </ul>
    </>
  )
}

export default List
