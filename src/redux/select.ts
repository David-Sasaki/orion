import { AppState } from "../redux/store";
import { useSelector } from "react-redux";

export const selectBoard = () => {
    const board = useSelector((state: AppState) => state.boardReducer.board);
    return board;
}

export const selectLogs = () => {
    const logs = useSelector((state: AppState) => state.logReducer.logs);
    return logs;
}
