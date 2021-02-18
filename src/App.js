import React from "react";
// Components:
import AddTodo from "./Containers/AddTodo";
import VisibleTodoList from "./Containers/VisibleTodoList";
import Footer from "./components/Footer";

import "./styles.css";

// create Store:

export default function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}
