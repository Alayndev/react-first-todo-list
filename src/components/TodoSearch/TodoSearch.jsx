import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../TodoContext/TodoProvider";

export function TodoSearch() {
  const { search, setSearch } = useContext(TodoContext);

  return (
    <div className="todoSearch">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="todoSearch__input"
        placeholder="Buscar ToDo"
        value={search}
      />
    </div>
  );
}
