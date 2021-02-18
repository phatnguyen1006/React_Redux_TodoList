// Define todos:

// todo:
const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // console.log("WAS ADD_TODO");
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      // console.log("Recived id");
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, { completed: !state.completed });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      // console.log("Was ADD_TODOS");
      // console.log("Added");
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action))
    default:
      return state;
  }
};

export default todos;
