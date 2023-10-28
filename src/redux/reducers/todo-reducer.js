/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
const initialValue = {
  todos: [{ id: 1, value: "belajar", completed: false, isEdit: false }],
};

function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: state.todos.length + 1,
        value: action.payload,
        completed: false,
        isEdit: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export function addTodo(value) {
  return {
    type: "ADD_TODO",
    payload: value,
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export default todoReducer;
