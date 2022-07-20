import React from "react";

const TodoInput = ({ value, handleChange, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={submit}>
      <input data-testId='todo-input' id="inp" type="text" value={value} onChange={handleChange}  autoFocus/>
      <button data-testId='todo-btn' type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
