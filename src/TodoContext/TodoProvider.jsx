import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedToDos = [];

  if (search.length >= 1) {
    searchedToDos = todos.filter((todo) => {
      const todoTextLC = todo.text.toLowerCase();

      const searchValueLC = search.toLowerCase();

      return todoTextLC.includes(searchValueLC);
    });
  } else {
    searchedToDos = todos;
  }

  const completeToDo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text); 

    const newToDos = [...todos]; 

    newToDos[todoIndex].completed = true;

    saveToDos(newToDos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newToDos = [...todos];

    newToDos.splice(todoIndex, 1); 

    saveToDos(newToDos);
  };

  
  const addToDo = (text) => {
    const newToDos = [...todos]; 

    newToDos.push({
      completed: false,
      text: text,
    });

    saveToDos(newToDos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        errorPROP: error,
        totalTodosPROP: totalTodos,
        completedTodos,
        search: search,
        setSearch,
        searchedToDos,
        completeToDo: completeToDo,
        deleteTodo,
        addToDo,
        openModal,
        setOpenModal,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
}


export { TodoContext, TodoProvider };
