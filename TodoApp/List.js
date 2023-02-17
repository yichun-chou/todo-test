import React from 'react'

function List(props) {
  const { listItems, setListItems, delTodo, toggleDone } = props
  return (
    <>
      <ul>
        {listItems.map((el) => {
          return (
            <li
              key={el.id}
              style={{ listStyleType: 'none' }}
              className={el.done ? 'active' : ''}
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

export default List
