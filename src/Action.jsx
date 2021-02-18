import React from "react";

// AddTodo
// Action to take the text on AddTodo
let nextTodoId = 0;

export const addTodo = (text) => {
  // console.log("Was Request Todo");
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text: text,
    completed: false
  };
};

// -----------TodoList
// Action to
export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    filter
  };
};

// Action: toggle to tick completed todo
export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};
