import { TYPES } from "./TYPES";
import { v4 as uuidv4 } from "uuid";
import { getTodos } from "./store";

const INITIAL_STATE = {
  todos: [{ title: "Example Todo", id: uuidv4(), completed: false }],
  formValue: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.HANDLE_FORM:
      return {
        ...state,
        formValue: action.payload,
      };
    case TYPES.ADD:
      return {
        ...state,
        todos: [
          ...getTodos(state),
          {
            title: action.payload.title,
            id: action.payload.id,
            completed: false,
          },
        ],
      };
    case TYPES.HANDLE_COMPLETE:
      const newTodo = getTodos(state).map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todos: [...newTodo],
      };
    case TYPES.REMOVE:
      return {
        ...state,
        todos: [
          ...getTodos(state).filter((todo) => todo.id !== action.payload.id),
        ],
      };
    default:
      return INITIAL_STATE;
  }
};

export default reducer;
