import React from "react";
import { connect } from "react-redux";
// import Action
import { addTodo } from "../Action";
// import Add Todo Form
import AddTodoForm from "../components/AddTodoForm";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      // console.log("Success Submit");
      dispatch(addTodo(text));
    }
  };
};

// function connect(
// mapStateToProps?,  ( callback when store update, but we dont need so we pass null )
// mapDispatchToProps?, ( callback to dispatch)
// mergeProps?, ( define where is wrapped components )
// options?)
let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm);

export default AddTodo;
