import React from "react";
import "./App.css";

import Title from "./conponents/Title";
import Block from "./conponents/Block";

function App(): JSX.Element {
  

  return (
    <div className="App">
       <Title />
       <Block/>
    </div>
  );
}

export default App;
