import React, { useState } from 'react'

function Edit(props) {
  const { id, item, handleSaveChange } = props
  const [edit, setEdit] = useState(item)
  return (
    <>
      <input
        type="text"
        value={edit}
        onChange={(e) => {
          setEdit(e.target.value)
        }}
      />
      <button
        onClick={() => {
          handleSaveChange(edit, id)
        }}
      >
        save change
      </button>
    </>
  )
}

export default Edit
