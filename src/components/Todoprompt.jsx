import React, { useState } from "react";
import { ReactComponent as CalendarCheckFill } from "bootstrap-icons/icons/calendar-check-fill.svg";

import Todotask from "./Todotask";

let i = 0;

function Todoprompt({ bgColor }) {
  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [inputStyle, setInputStyle] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function addTask() {
    if (editingId !== null) {
      // Edytowanie istniejącego zadania
      setArr(arr.map(task =>
        task.id === editingId ? { ...task, message: editValue } : task
      ));
      setEditingId(null);
      setEditValue('');
    } else {
      // Dodawanie nowego zadania
      i += 1;
      setArr([...arr, { id: i, message: inputValue, isChecked: false }]);
      setInputValue('');
    }
  }

  function deleteTask(id) {
    setArr(arr.filter(task => task.id !== id));
  }

  function editTask(id, message) {
    setEditingId(id);
    setEditValue(message);
  }
  function checkedTask(id, event){
    
    if (event.target.checked === true) {
      return arr.filter(task => task.id == id ? task.isChecked = true : task.isChecked = false)[0].isChecked;
      
    }
    else{
      return false;
      
    }
    console.log(event);
    console.log(arr);
  }
  return (
    <>
      <div className={`todo ${bgColor}`}>
        <input
          className="form-control form-control-lg"
          type="text"
          id="input"
          aria-label=".form-control-lg example"
          value={editingId !== null ? editValue : inputValue}
          style={{inputStyle}}
          onChange={handleChange}
          required
        />
        <button onClick={addTask} id="add" className="btn btn-success">
          <CalendarCheckFill />
        </button>
      </div>
      <div className="todo__tasks">
        {arr.map((task) => (
          <Todotask
            key={task.id}
            id={task.id}
            message={task.message}
            checkFunc={checkedTask}
            editFunc={editTask}
            deleteFunc={deleteTask}
            isEditing={task.id === editingId}
          />
        ))}
      </div>
    </>
  );
}

export default Todoprompt;
