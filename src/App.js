import { useState } from "react";
import { AddTodo, TodoList, TodoFilter } from "./Components";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentType, setCurrentType] = useState("all");
  const [isEdit, setIsEdit] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState("");

  function addTodoItem(value) {
    const newTodo = {
      id: Date.now(),
      text: value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function changeType(value) {
    switch (value) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  function deleteTodoItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function changeTodoItem(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function editTodoItem(value) {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodoId ? { ...todo, text: value } : todo
      )
    );
    setIsEdit(false);
  }

  function selectTodoItem(id) {
    setCurrentTodoId(id);
    setIsEdit(true);
  }

  return (
    <div>
      <h1>Todo-List</h1>
      <AddTodo
        addTodoItem={addTodoItem}
        currentTodo={todos.find((todo) => todo.id === currentTodoId)}
        isEdit={isEdit}
        editTodoItem={editTodoItem}
      />
      <TodoList
        todos={changeType(currentType)}
        deleteTodoItem={deleteTodoItem}
        changeTodoItem={changeTodoItem}
        selectTodoItem={selectTodoItem}
      />
      <TodoFilter setCurrentType={setCurrentType} />
    </div>
  );
}

export default App;
