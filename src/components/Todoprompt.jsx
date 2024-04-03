import React, { useState } from "react";
import { ReactComponent as CalendarCheckFill } from "bootstrap-icons/icons/calendar-check-fill.svg";

function Todoprompt({ bgColor }) {
  const [arr, changeArr] = useState([])
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  function addTask() {

    changeArr([...arr, inputValue])

  }
  return (
    <>
      <div className={`todo ${bgColor}`}>
        <input
          class="form-control form-control-lg"
          type="text"
          id="input"
          aria-label=".form-control-lg example"
          onChange={handleChange}
        />
        <button onClick={addTask} id="add" className="btn btn-success">
          <CalendarCheckFill />
        </button>

      </div>
      <div className="todo__tasks">
        {
          arr.map()
        }
      </div>
    </>
  );
}

export default Todoprompt;
