import React from "react";
import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

const Reducer = combineReducers({
  visibilityFilter,
  todos
});

export default Reducer;
