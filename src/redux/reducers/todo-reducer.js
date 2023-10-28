/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
const initialValue = {
  todos: [
    { id: 1, value: "belajar", completed: false, isEdit: false },
    { id: 2, value: "berbicara", completed: true, isEdit: false },
  ],
  isEdit: null,
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

    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    case "START_EDIT":
      return {
        ...state,
        isEdit: action.payload,
      };
    case "EDIT_TODO":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === state.isEdit) {
          return { ...todo, value: action.payload };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
        isEdit: null,
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

export function completeTodo(id) {
  return {
    type: "COMPLETE_TODO",
    payload: id,
  };
}

export function editTodo(value) {
  return {
    type: "EDIT_TODO",
    payload: value,
  };
}

export function startEdit(id) {
  return {
    type: "START_EDIT",
    payload: id,
  };
}

export default todoReducer;
