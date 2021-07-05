import {TodoConstant} from "../constants/todo.constant";

export const TodoAddAction = (payload) => ({
    type: TodoConstant.ADD,
    payload,
});

export const TodoAddSuccessAction = (payload) => ({
    type: TodoConstant.ADD_SUCCESS,
    payload,
});

export const TodoAddFailAction = () => ({
    type: TodoConstant.ADD_FAIL
});


export const todoActions = {
    TodoAddAction,
    TodoAddSuccessAction,
    TodoAddFailAction,
};
