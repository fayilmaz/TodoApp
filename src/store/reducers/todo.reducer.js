import { TodoConstant } from "../constants/todo.constant";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  todos: [{ title: "Example Todo", id: uuidv4(), completed: false }],
  formValue: "",
  addTodoLoading: false,
  addTodoLoaded: false,
  addTodoLoadFail: false,
  user: {
    user: 0,
    name: 'tunc',
    success: false,
  },
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoConstant.HANDLE_FORM:
      return {
        ...state,
        formValue: action.payload,
      };

    // case TodoConstant.ADD:
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos,
    //       {
    //         title: action.payload.title,
    //         id: action.payload.id,
    //         completed: false,
    //       },
    //     ],
    //   };

    case TodoConstant.ADD:
      return {
        ...state,
        addTodoLoading: true,
        addTodoLoaded: false,
        addTodoLoadFail: false,
      };
    case TodoConstant.ADD_SUCCESS:
      console.log('ADD_SUCCESS', action.payload);
      return {
        ...state,
        addTodoLoading: false,
        addTodoLoaded: true,
        addTodoLoadFail: false,
        user: action.payload,
      };
    case TodoConstant.ADD_FAIL:
      return {
        ...state,
        addTodoLoading: false,
        addTodoLoaded: false,
        addTodoLoadFail: true,
      };

    case TodoConstant.HANDLE_COMPLETE:
      const newTodo = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodo,
      };
    case TodoConstant.REMOVE:
      const nTodo = state.todos.filter((todo) => todo.id !== action.payload.id);
      return {
        ...state,
        todos: nTodo,
      };
    default:
      return {
        ...state,
      };
  }
};

export default todoReducer;
