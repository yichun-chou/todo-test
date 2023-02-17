import React from 'react'
import TodoItem from './TodoItem'

function List(props) {
  const { listItems, setListItems, delTodo, toggleDone } = props
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
              listItems={listItems}
              setListItems={setListItems}
              toggleDone={toggleDone}
              delTodo={delTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default List
