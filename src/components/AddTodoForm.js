import React from "react";

export default function AddTodoForm({ onSubmit }) {
  let input;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input.value);
        input.value = "";
      }}
    >
      <input
        ref={(node) => (input = node)}
        placeholder="Add Todo"
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}
