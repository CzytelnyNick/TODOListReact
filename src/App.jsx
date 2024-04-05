import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ReactComponent as MoonFill } from "bootstrap-icons/icons/moon-fill.svg";


import Todoprompt from "./components/Todoprompt";

function App() {
  const [bgClass, changeClass] = useState("")
  function darkMode() {
    bgClass === "" ? changeClass("background") : changeClass("");
    // bgColor == "background" ? setInputStyle("background: #282c34") : setInputStyle("")
  }
  return (
    <div className={`App ${bgClass}`}>

      <div className={`container`}>
        <button className="btn btn-dark" id="buttonDark" onClick={darkMode}><MoonFill/></button>
        <p className="text-center my-5 fs-1">TODO Lista</p>
        <Todoprompt bgColor={bgClass} />
      </div>
    </div>
  );
}

export default App;
