import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { selectLogs } from "../redux/select";
import { BOARD_SIZE, TAB_TYPES, TIME_OPTIONS } from "../consts";
import { useNavigate } from "react-router-dom";

const LogView: FC = () => {
  const logs = selectLogs();
  const navigate = useNavigate();
  const { type } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Logs</h1>
      <div className="w-full">
        <div className="flex border-b border-gray-200">
          {TAB_TYPES.map((tabType, index) => (
            <button
              key={index}
              className={`${
                tabType === type
                  ? "bg-white border-b-2 border-blue-500"
                  : "bg-gray-100"
              } text-gray-500 font-semibold py-2 px-4 hover:bg-white focus:outline-none`}
              onClick={() => navigate(`/logs/${tabType}`)}
            >
              {tabType}
            </button>
          ))}
        </div>
        <div className="p-4">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Player</th>
                <th className="px-4 py-2">Position</th>
              </tr>
            </thead>
            <tbody>
              {(type === "all"
                ? logs
                : type === "playerA"
                ? logs.filter((log) => log.player === "A")
                : logs.filter((log) => log.player === "B")
              ).map((item) => (
                <tr key={uuidv4()}>
                  <td className="border px-4 py-2">
                    {item.time.toLocaleString("en-US", TIME_OPTIONS)}
                  </td>
                  <td className="border px-4 py-2">{item.player}</td>
                  <td className="border px-4 py-2">{`${Math.floor(
                    item.position / BOARD_SIZE
                  )}-${item.position % BOARD_SIZE}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2`}
        onClick={() => navigate("/game")}
      >
        Back To Game
      </button>
    </div>
  );
};

export default LogView;
