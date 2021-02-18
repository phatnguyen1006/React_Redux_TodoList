import React from "react";

// AddTodo
// Action to take the text on AddTodo
let nextTodoId = 0;

export const addTodo = (text) => {
  // console.log("Was Request Todo");
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text: text
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
  // console.log("Was dispatch Toggle");
  return {
    type: "TOGGLE_TODO",
    id
  };
};
