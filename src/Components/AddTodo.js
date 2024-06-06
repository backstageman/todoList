import { useState, useRef } from "react";
function AddTodo({ addTodoItem, currentTodo, isEdit, editTodoItem }) {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  function handleAdd() {
    if (isEdit) {
      editTodoItem(inputRef.current.value);
    } else {
      addTodoItem(value);
    }
    setValue("");
  }

  return (
    <>
      {isEdit ? (
        <input
          type="input"
          key="edit"
          defaultValue={isEdit ? currentTodo.text : ""}
          ref={inputRef}
        />
      ) : (
        <input
          type="input"
          key="add"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      )}
      <button onClick={handleAdd}> {isEdit ? "更新事项" : "新建事项"}</button>
    </>
  );
}

export default AddTodo;
