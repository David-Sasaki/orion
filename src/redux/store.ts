import { createStore, combineReducers } from "redux";
import { boardReducer } from "./reducers/boardReducer";
import { logReducer } from "./reducers/logReducer";

const rootReducer = combineReducers({
    boardReducer,
    logReducer,
});

const store = createStore(rootReducer);

export default store;
export type AppState = ReturnType<typeof rootReducer>;
