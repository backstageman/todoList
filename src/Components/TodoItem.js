import { useState } from "react";

function TodoItem({ todo, deleteTodoItem, changeTodoItem, selectTodoItem }) {
  function handleEdit() {
    if (todo.completed) {
      return alert("事件已经完成，只能编辑未完成的事件。");
    } else {
      selectTodoItem(todo.id);
    }
  }
  return (
    <>
      <li>
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <button onClick={() => changeTodoItem(todo.id)}>切换</button>
        <button onClick={() => handleEdit()}>编辑</button>
        <button onClick={() => deleteTodoItem(todo.id)}>删除</button>
      </li>
    </>
  );
}

export default TodoItem;
