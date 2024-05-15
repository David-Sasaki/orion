import { CREATE_LOG } from "../../consts";
import { Log } from "../../types";

interface LogsState {
    logs: Log[];
}

const initialState: LogsState = {
    logs: []
};

export const logReducer = (state = initialState, action: any): LogsState => {
    switch (action.type) {
        case CREATE_LOG:
            return { ...state, logs: [...state.logs, action.payload] };
        default:
            return state;
    }
};
