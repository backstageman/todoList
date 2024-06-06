function TodoFilter({ setCurrentType }) {
  return (
    <div>
      <button onClick={() => setCurrentType("all")}>All</button>
      <button onClick={() => setCurrentType("active")}>Active</button>
      <button onClick={() => setCurrentType("completed")}>Completed</button>
    </div>
  );
}

export default TodoFilter;
