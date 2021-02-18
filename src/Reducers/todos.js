// Define todos:

// todo:
const Todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // console.log("WAS ADD_TODO");
      return {
        id: action.id,
        text: action.text,
        completed: action.completed
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, { completed: !state.completed });
    default:
      return state;
  }
};

const Todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      // console.log("Was ADD_TODOS");
      console.log("Added");
      return [...state, Todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        Todo(todo, action);
      });
    default:
      return state;
  }
};

export default Todos;
