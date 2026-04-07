import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>

      <Tooltip text="Tooltip for heading">
        <h2>Hover me</h2>
      </Tooltip>

      <Tooltip text="Tooltip for paragraph">
        <p>Hover paragraph</p>
      </Tooltip>

    </div>
  );
};

export default App;