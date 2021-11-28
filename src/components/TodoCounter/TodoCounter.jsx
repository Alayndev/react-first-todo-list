import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoProvider";
import "./TodoCounter.css";

export function TodoCounter() {
  const { completedTodos, totalTodosPROP } = useContext(TodoContext);
  
  return (
    <h2 className="title">
      Has completado {completedTodos} de {totalTodosPROP} TODOs
    </h2>
  );
}
