import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => {
  // console.log("TodoList Da Duoc Goi");
  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
