import React, { useState } from 'react';
import { ReactComponent as PenFill } from "bootstrap-icons/icons/pen-fill.svg";
import { ReactComponent as TrashFill } from "bootstrap-icons/icons/trash-fill.svg";
function Todotask({ id, message, isEditing, editFunc, deleteFunc }) {
  const [editMessage, setEditMessage] = useState(message);

  function handleEdit() {
    if (isEditing) {
      editFunc(id, editMessage);
    } else {
      editFunc(id, message);
    }
  }

  function handleChange(event) {
    setEditMessage(event.target.value);
  }

  return (
    <div className='todoTask'>
      {!isEditing ? (
        <>
          <input type="checkbox" />
          <div className="todoTextArea">{message}</div>
        </>
      ) : (
        <input
          type="text"
          value={editMessage}
          onChange={handleChange}
          
        />
      )}
      <button className="btn btn-warning todoEditButton" onClick={handleEdit}>
        <PenFill />
      </button>
      <button className="btn btn-danger todoDeleteButton" onClick={() => deleteFunc(id)}>
        <TrashFill />
      </button>
    </div>
  );
}

export default Todotask;
