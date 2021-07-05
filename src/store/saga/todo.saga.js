import {put, takeLatest} from "redux-saga/effects";
import {TodoConstant} from "../constants/todo.constant";
import {todoActions} from "../actions/todo.action";

function* todoAdd(action) {
    try {
        console.log('todoAdd', action);
        // const response = yield call(() => {
        //     return {
        //         user: 1,
        //         name: 'fahrettin',
        //         success: true,
        //     };
        // }, action.payload);

        const response = {
            user: 1,
            name: 'fahrettin',
            success: true,
        }

        if (!response.success) {
            // eslint-disable-next-line no-undef
            yield put(todoActions.TodoAddFailAction());
        } else {
            // eslint-disable-next-line no-undef
            yield put(todoActions.TodoAddSuccessAction(response));
        }
    } catch (error) {
        yield put(todoActions.TodoAddFailAction());
    }
}


export function* todoWatcherSaga() {
    yield takeLatest(TodoConstant.ADD, todoAdd);
}
