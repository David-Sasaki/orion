import { CREATE_BOARD, UPDATE_BOARD } from "../../consts";
import { Board } from "../../types";
import { createBoard } from "../actions/boardActions";

interface BoardState {
    board: Board;
}

const initialState: BoardState = {
    board: createBoard().payload
};

export const boardReducer = (state = initialState, action: any): BoardState => {
    switch (action.type) {
        case CREATE_BOARD:
            return { ...state, board: action.payload };
        case UPDATE_BOARD:
            return { ...state, board: action.payload };
        default:
            return state;
    }
};
