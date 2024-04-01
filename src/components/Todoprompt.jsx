import React, {useState} from "react";
import { ReactComponent as CalendarCheckFill } from "bootstrap-icons/icons/calendar-check-fill.svg";
function Todoprompt() {
    const [arr, changeArr] = useState([])
    const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
    function addTask(){

    } 
  return (
    <div className="todo">
      <input
        class="form-control form-control-lg"
        type="text"
        id="input"
        aria-label=".form-control-lg example"
      />
      <button onClick={addTask} id="add" className="btn btn-success">
        <CalendarCheckFill />
      </button>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default Todoprompt;
