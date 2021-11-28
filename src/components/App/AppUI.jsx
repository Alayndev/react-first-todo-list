import React, { useContext } from "react";

import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoSearch } from "../TodoSearch/TodoSearch";

import { TodoContext } from "../../TodoContext/TodoProvider";

import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";

import { TodosLoading } from "../TodosLoading/TodosLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { TodosError } from "../TodosError/TodosError";

export function AppUI() {
  const {
    loading,
    errorPROP,
    searchedToDos,
    completeToDo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {errorPROP && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && !searchedToDos.length && <EmptyTodos />}

        {searchedToDos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}
