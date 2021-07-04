import { TYPES } from "./TYPES";

const INITIAL_STATE = {
  todos: [{ title: "Example Todo", completed: false }],
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
        todos: [...state.todos, { title: action.payload, completed: false }],
      };
    default:
      return INITIAL_STATE;
  }
};

export default reducer;
