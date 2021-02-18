import React from "react";

// Set Filter Reducer:

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_FILTER":
      console.log("Was SetFilter");
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
