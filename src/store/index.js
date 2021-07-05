import {applyMiddleware, combineReducers, createStore} from "redux";
import todoReducer from "./reducers/todo.reducer";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "./saga";

const reducers = combineReducers({
    todos: todoReducer,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
