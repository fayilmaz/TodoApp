import { createSelector } from "reselect";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const getState = createSelector([(state) => state], (state) => state);

export const getTodos = createSelector(
  [(state) => state.todos],
  (todos) => todos,
);

export const getFormValue = createSelector(
  [(state) => state.formValue],
  (formValue) => formValue,
);

export default store;
