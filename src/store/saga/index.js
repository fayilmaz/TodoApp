import {all} from "redux-saga/effects";
import {todoWatcherSaga} from "./todo.saga";

export default function* rootSaga() {
    yield all([
        todoWatcherSaga()
    ])
    // code after all-effect
}
