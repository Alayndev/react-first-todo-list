import React from "react";
import "./TodoList.css";

export function TodoList({ children }) {
  return (
    <>
      <section>
        <ul className='list'>{children}</ul>
      </section>
    </>
  );
}
