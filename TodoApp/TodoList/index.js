import React from 'react'
import TodoItem from './TodoItem'

function List(props) {
  const { listItems, handleDelTodo, handleToggleDone } = props
  return (
    <>
      <ul>
        {listItems.map((el) => {
          const { id, done, item } = el
          return (
            <TodoItem
              key={id}
              id={id}
              done={done}
              item={item}
              handleDelTodo={handleDelTodo}
              handleToggleDone={handleToggleDone}
            />
          )
        })}
      </ul>
    </>
  )
}

export default List
