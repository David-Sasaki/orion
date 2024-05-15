import { CREATE_LOG } from "../../consts";
import { Log } from "../../types";

export const createLog = (player: string, position: number): { type: string, payload: Log } => {
    const log: Log = {
        time: new Date(),
        player: player,
        position: position
    };
    return { type: CREATE_LOG, payload: log };
};
