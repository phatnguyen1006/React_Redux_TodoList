import React from "react";

const Todo = ({ text, completed, onClick }) => {
  // console.log("TODO DA DC GOI");

  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
};

export default Todo;
