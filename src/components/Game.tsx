import { type FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Player from "./Player";
import { useDispatch } from "react-redux";
import { createBoard, updateBoard } from "../redux/actions/boardActions";
import { createLog } from "../redux/actions/logActions";
import { selectBoard } from "../redux/select";
import { BOARD_SIZE, STRAIGHT_COUNT, DIRECTIONS } from "../consts";

const Game: FC = () => {
  const board = selectBoard();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPlayer, setCurrentPlayer] = useState<string>("A");
  const [isFinished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    dispatch(createBoard());
  }, []);

  const handleClick = (index: number) => {
    dispatch(updateBoard(board, index, currentPlayer));
    dispatch(createLog(currentPlayer, index));
    setCurrentPlayer(currentPlayer === "A" ? "B" : "A");
  };

  const getStatus = () => {
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        const cell = board.cells[i * BOARD_SIZE + j];
        if (cell === currentPlayer || cell === "") continue;
        for (let d = 0; d < DIRECTIONS.length; d++) {
          let flag = true;
          for (let k = 1; k < STRAIGHT_COUNT; k++) {
            const x = i + k * DIRECTIONS[d][0];
            const y = j + k * DIRECTIONS[d][1];
            if (x < 0 || y < 0 || x >= BOARD_SIZE || y >= BOARD_SIZE)
              flag = false;
            if (board.cells[x * BOARD_SIZE + y] !== cell) flag = false;
          }
          if (flag) return true;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    setFinished(getStatus());
  }, [currentPlayer]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-center space-x-8">
        <h1 className="text-2xl font-bold mb-4">Current Player:</h1>
        <Player id={currentPlayer} />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-10" style={{ gap: "0" }}>
          {board?.cells.map((item, index) => (
            <div
              key={`cell-${index}`}
              className={
                "size-10 bg-gray-200 border border-gray-300 flex items-center justify-center cursor-pointer" +
                (isFinished || item !== "" ? " pointer-events-none" : "")
              }
              onClick={() => handleClick(index)}
            >
              {item === "" ? "" : <Player id={item} />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-8">
        {isFinished && <Player id={currentPlayer === "A" ? "B" : "A"} />}
        {isFinished && <h1 className="text-2xl font-bold mb-4">WON!</h1>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/logs/all")}
        >
          View Logs
        </button>
      </div>
    </div>
  );
};

export default Game;
