import { BOARD_SIZE, CREATE_BOARD, UPDATE_BOARD } from "../../consts";
import { Board } from "../../types";

export const createBoard = (): { type: string, payload: Board } => {
    const board: Board = {
        cells: Array(BOARD_SIZE * BOARD_SIZE).fill("")
    };
    return { type: CREATE_BOARD, payload: board };
};

export const updateBoard = (board: Board, id: number, newValue: string): { type: string, payload: Board } => {
    const newCells = [...board.cells];
    newCells[id] = newValue;
    const newBoard: Board = {
        cells: newCells
    };
    return { type: UPDATE_BOARD, payload: newBoard };
};
