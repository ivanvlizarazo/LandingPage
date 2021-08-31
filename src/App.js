import React from "react";
import BaseRouter from "../src/Routes";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App(props) {

  return (
    <BrowserRouter >
      <BaseRouter {...props} />
    </BrowserRouter>
  );
}

export default App;