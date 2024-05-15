import { type FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import LogView from "./components/LogView";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/game" element={<Game />} />
        <Route path="/logs/:type" element={<LogView />} />
      </Routes>
    </Router>
  );
};

export default App;
