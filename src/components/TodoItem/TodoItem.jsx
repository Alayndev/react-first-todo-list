import React from "react";
import "./TodoItem.css";

export function TodoItem(props) {
  return (
    <>
      <li className='todoItem'>
        <span
          onClick={props.onComplete}
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}>
          <i className='fas fa-check'></i>
        </span>

        <p
          className={`todoItem-p ${
            props.completed && "todoItem-p--completed"
          }`}>
          {props.text}
        </p>

        <span onClick={props.onDelete} className='Icon Icon-delete'>
          <i className='fas fa-trash-alt'></i>
        </span>
      </li>
    </>
  );
}
