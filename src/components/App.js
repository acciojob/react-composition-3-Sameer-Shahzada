import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>

      <Tooltip text="This is tooltip for Text 1">
        <p>Hover over me (Text 1)</p>
      </Tooltip>

      <Tooltip text="Tooltip for Button">
        <button>Hover Button</button>
      </Tooltip>

      <Tooltip text="Tooltip for Span">
        <span>Hover Span</span>
      </Tooltip>

    </div>
  );
};

export default App;