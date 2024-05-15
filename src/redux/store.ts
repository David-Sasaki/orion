import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { boardReducer } from "./reducers/boardReducer";
import { logReducer } from "./reducers/logReducer";

const rootReducer = combineReducers({
    boardReducer,
    logReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
export type AppState = ReturnType<typeof rootReducer>;
