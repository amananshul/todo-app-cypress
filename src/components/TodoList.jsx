import React from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} data-testId='todo-item'>
          <input type="checkbox" value={todo.isCompleted} data-testid="todo-checkbox" />
          <span data-testId='todo-item-value'>{todo.value}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
