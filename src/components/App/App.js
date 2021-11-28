import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../../TodoContext/TodoProvider";
import "./App.css";

function App() {
  return (
    <div className='container'>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </div>
  );
}

export default App;
