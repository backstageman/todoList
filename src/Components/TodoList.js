import TodoItem from "./TodoItem";
function TodoList({ todos, deleteTodoItem, changeTodoItem, selectTodoItem }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodoItem={deleteTodoItem}
            changeTodoItem={changeTodoItem}
            selectTodoItem={selectTodoItem}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
