import { createSelector } from "reselect";

export const getState = (state) => state.todos;

export const getTodos = createSelector(
    getState,
    (todos) => todos.todos,
);

export const getFormValue = createSelector(
    getState,
    (state) => state.formValue,
);

export const userSelector = createSelector(
    getState,
    (state) => {
        return state.user;
    },
);
